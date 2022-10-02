import { Tag } from 'antd';
import { UserRole } from '#/generated/schemas';

interface Props {
  role?: UserRole;
}

const getRoleColor = (role?: UserRole) => {
  switch (role) {
    case UserRole.SuperAdmin:
      return 'bg-info';
    case UserRole.Admin:
      return 'bg-alert';
    case UserRole.Customer:
      return 'bg-success';
  }
};

function RoleTag({ role }: Props) {
  return (
    <Tag className={`r-40 text-[white] ${getRoleColor(role)}`}>{role}</Tag>
  );
}

export default RoleTag;
