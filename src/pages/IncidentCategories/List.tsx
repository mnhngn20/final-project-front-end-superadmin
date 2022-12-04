import { Button, Table, Typography } from 'antd';
import { useState, useMemo } from 'react';
import IncidentCategoryForm from './Form';
import Filters from './Filters';
import {
  OrderBy,
  useGetIncidentCategoriesQuery,
  useUpsertIncidentCategoryMutation,
  UpsertIncidentCategoriesInput,
  IncidentCategory,
} from '#/generated/schemas';
import { FormModal } from '#/shared/components/commons/FormModal';
import { useTable } from '#/shared/hooks/useTable';
import { DeepPartial } from '#/shared/utils/type';
import { showError, showSuccess } from '#/shared/utils/notification';
import { AddSVG, EditSVG } from '#/assets/svgs';
import Image from '#/shared/components/commons/Image';
import DefaultImage from '#/assets/images/default.png';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';
import { formatDate } from '#/shared/utils/date';
import CustomTag from '#/shared/components/commons/CustomTag';
import { ColumnsType } from 'antd/lib/table';

export type GetIncidentCategoriesFilter = {
  name?: string;
};

function List() {
  const [filters, setFilters] = useState<
    GetIncidentCategoriesFilter | undefined
  >(undefined);
  const { pageSize, onChange, currentPage, setCurrentPage } = useTable();
  const [selectedItem, setSelectedItem] = useState<
    DeepPartial<IncidentCategory> | undefined
  >(undefined);

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const { data, loading, refetch } = useGetIncidentCategoriesQuery({
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

  const incidentCategories = data?.getIncidentCategories?.items ?? [];

  const [upsertIncidentCategory, { loading: upsertIncidentCategoryLoading }] =
    useUpsertIncidentCategoryMutation({
      onCompleted() {
        showSuccess(
          selectedItem?.id
            ? 'Updated Incident category successfully!'
            : 'Created Incident category successfully!',
        );
        clearSelectedItem();
        refetch();
      },
      onError: showError,
    });

  const onFilter = ({ name }: GetIncidentCategoriesFilter) => {
    const newFilter = {
      ...(name && { name }),
    };
    setCurrentPage(1);
    setFilters(newFilter);
  };

  const onSubmit = ({ ...values }: UpsertIncidentCategoriesInput) => {
    upsertIncidentCategory({
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

  const COLUMNS: ColumnsType<DeepPartial<IncidentCategory>> = useMemo(
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
        render(icon?: string) {
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
        title: 'Category Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 250,
        render: (description?: string) => description ?? 'N/A',
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render(isActive?: boolean) {
          return (
            <CustomTag
              content={isActive ? 'Active' : 'Inactive'}
              className={
                isActive
                  ? 'bg-success text-[white]'
                  : 'bg-grey-secondary-300 text-[white]'
              }
            />
          );
        },
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt?: string) =>
          formatDate(createdAt, 'hh:mm A, DD MMMM YYYY'),
      },
      {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: (updatedAt?: string) =>
          formatDate(updatedAt, 'hh:mm A, DD MMMM YYYY'),
      },
      {
        title: '',
        dataIndex: 'id',
        key: 'action',
        fixed: 'right' as const,
        render: (_: unknown, record: DeepPartial<IncidentCategory>) => {
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
            Incident Category List
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
          dataSource={incidentCategories}
          columns={COLUMNS as any}
          scroll={{ x: 'max-content' }}
          loading={loading || upsertIncidentCategoryLoading}
          onChange={onChange}
          pagination={false}
        />
        <PaginationPanel
          current={currentPage ?? 1}
          pageSize={10}
          total={data?.getIncidentCategories?.total ?? 0}
          setCurrentPage={setCurrentPage}
          className="flex justify-end py-6 pr-6"
          showQuickJumper
        />
      </div>
      <FormModal<UpsertIncidentCategoriesInput>
        loading={upsertIncidentCategoryLoading}
        onSubmit={onSubmit}
        name="Incident Category"
        onClose={clearSelectedItem}
        selectedItem={selectedItem}
        initialValues={selectedItem}
      >
        <IncidentCategoryForm />
      </FormModal>
    </>
  );
}
export default List;
