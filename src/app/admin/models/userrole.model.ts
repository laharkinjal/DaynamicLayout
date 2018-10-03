import { Role } from "./role.model";
import { User } from "./users.model";

export interface UserRole {
  id?: number;
  userId: number;
  roleId: number;

  role?: Role;
  user?: User;
}
