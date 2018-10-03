import { Grant } from "./grant.model";
import { ObjectName } from "./objectname.model";
import { RoleObject } from "./roleObject.model";

export interface Role {
  id?: number;
  name: string;
  description: string;
  system?: boolean;
  active: boolean;
  root?: boolean;
  parentId:number;
  createDate?: string;
  createdBy?: string;
  createdByDescription?: string;
  updateDate?: string;
  updatedBy?: number;
  updatedByDescription?: string;

  grants?: Grant[];
  roleobjects?: RoleObject[];
  // unassigngrants?: Grant[];
}
