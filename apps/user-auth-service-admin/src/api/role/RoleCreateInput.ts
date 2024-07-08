import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  description?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
