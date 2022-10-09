import { Button, Table, Typography } from 'antd';
import { useState, useMemo } from 'react';
import AmenityForm from './Form';
import Filters from './Filters';
import {
  OrderBy,
  Location,
  AmenityType,
  useGetAmenityTypesQuery,
  useUpsertAmenityTypeMutation,
  UpsertAmenityTypeInput,
} from '#/generated/schemas';
import { FormModal } from '#/shared/components/commons/FormModal';
import { useTable } from '#/shared/hooks/useTable';
import { DeepPartial } from '#/shared/utils/type';
import { showError, showSuccess } from '#/shared/utils/notification';
import { AddSVG, EditSVG } from '#/assets/svgs';
import Image from '#/shared/components/commons/Image';
import DefaultImage from '#/assets/images/default.png';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';
import CustomTag from '#/shared/components/commons/CustomTag';

export type GetAmenityTypesFilter = {
  name?: string;
};

function List() {
  const [filters, setFilters] = useState<GetAmenityTypesFilter | undefined>(
    undefined,
  );
  const { pageSize, onChange, currentPage, setCurrentPage } = useTable();
  const [selectedItem, setSelectedItem] = useState<
    DeepPartial<AmenityType> | undefined
  >(undefined);

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const { data, loading, refetch } = useGetAmenityTypesQuery({
    variables: {
      input: {
        orderBy: OrderBy.Desc,
        page: currentPage,
        limit: pageSize,
        ...filters,
      },
    },
    fetchPolicy: 'network-only',
  });

  const amenityTypes = data?.getAmenityTypes?.items ?? [];

  const [upsertAmenityType, { loading: upsertAmenityTypeLoading }] =
    useUpsertAmenityTypeMutation({
      onCompleted() {
        showSuccess(
          selectedItem?.id
            ? 'Updated amenity type successfully!'
            : 'Created amenity type successfully!',
        );
        clearSelectedItem();
        refetch();
      },
      onError: showError,
    });

  const onFilter = ({ name }: GetAmenityTypesFilter) => {
    const newFilter = {
      ...(name && { name }),
    };
    setCurrentPage(1);
    setFilters(newFilter);
  };

  const onSubmit = ({ ...values }: UpsertAmenityTypeInput) => {
    upsertAmenityType({
      variables: {
        input: {
          ...values,
          ...(selectedItem?.id && {
            id: Number(selectedItem?.id),
          }),
        },
      },
    });
  };

  const COLUMNS = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Image',
        dataIndex: 'icon',
        key: 'icon',
        render(icon: string) {
          return (
            <Image
              url={icon ?? DefaultImage}
              width={100}
              height={100}
              className="object-cover"
            />
          );
        },
      },
      {
        title: 'Amenity Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render(isActive: boolean) {
          return (
            <CustomTag
              content={isActive ? 'Active' : 'Inactive'}
              className={
                isActive ? 'bg-success text-[white]' : 'bg-warning text-[white]'
              }
            />
          );
        },
      },
      {
        title: '',
        dataIndex: 'id',
        key: 'action',
        fixed: 'right' as const,
        render: (_: unknown, record: DeepPartial<Location>) => {
          const onEdit = () => {
            setSelectedItem({
              ...record,
            });
          };
          return (
            <div className="flex items-center justify-center gap-4 text-base text-primary-color">
              <Button onClick={onEdit} type="link">
                <EditSVG width={24} height={24} />
              </Button>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <>
      <Filters onFilter={onFilter} />
      <div className="rounded-xl bg-[white] px-4">
        <div className="flex items-center justify-between py-4">
          <Typography className="text-xl font-semibold">
            Amenity Type List
          </Typography>
          <Button
            type="primary"
            onClick={() => setSelectedItem({})}
            icon={<AddSVG className="anticon" />}
          >
            Create
          </Button>
        </div>
        <Table
          rowKey="id"
          dataSource={amenityTypes}
          columns={COLUMNS}
          scroll={{ x: 'max-content' }}
          loading={loading || upsertAmenityTypeLoading}
          onChange={onChange}
          pagination={false}
        />
        <PaginationPanel
          current={currentPage ?? 1}
          pageSize={10}
          total={data?.getAmenityTypes?.total ?? 0}
          setCurrentPage={setCurrentPage}
          className="flex justify-end py-6 pr-6"
          showQuickJumper
        />
      </div>
      <FormModal<UpsertAmenityTypeInput>
        loading={upsertAmenityTypeLoading}
        onSubmit={onSubmit}
        name="Amenity Type"
        onClose={clearSelectedItem}
        selectedItem={selectedItem}
        initialValues={selectedItem}
      >
        <AmenityForm />
      </FormModal>
    </>
  );
}
export default List;
