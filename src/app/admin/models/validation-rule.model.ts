import { Field } from "./field.model";
import { RoleFGrant } from "./roleF-grant.model";
import { RoleLGrant } from "./roleL-grant.model";
import { RoleObject } from "./roleObject.model";

export class ValidationRule {
    id?: number;
    name: string;
    description?: string;
    statement?:string;
    active: boolean;
    createDate?: string;
    createdBy?: number;
    updateDate?: string;
    updatedBy?: number;
    objectId?:number;
}

