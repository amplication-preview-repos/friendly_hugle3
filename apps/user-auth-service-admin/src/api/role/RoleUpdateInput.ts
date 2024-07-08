import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  description?: string | null;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
