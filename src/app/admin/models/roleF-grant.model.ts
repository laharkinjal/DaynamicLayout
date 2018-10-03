import { Field } from "./field.model";

export class RoleFGrant {
    id: number;
    active:boolean;
    roleId: number;
    objectId: number;
    fieldId: number;
    createDate: string;
    createdBy: number;
    updateDate: string;
    updatedBy: number;
    createdByDescription: string;
    updatedByDescription: string;
    field: Field;
}