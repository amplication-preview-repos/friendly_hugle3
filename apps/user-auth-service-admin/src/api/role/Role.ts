import { UserRole } from "../userRole/UserRole";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  userRoles?: Array<UserRole>;
};
