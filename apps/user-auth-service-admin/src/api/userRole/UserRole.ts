import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  role?: Role | null;
  user?: User | null;
};
