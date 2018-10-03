import { Field } from "./field.model";
import { RecordType } from "./recordtype.model";
import { RoleFGrant } from "./roleF-grant.model";
import { RoleLGrant } from "./roleL-grant.model";
import { Role } from "./role.model";
import { ObjectName } from "./objectname.model";

export class RoleObject {
    id?: number;
    create: number;
    read: number;
    update: number;
    delete: number;
    role: Role;
    object: ObjectName;
}

