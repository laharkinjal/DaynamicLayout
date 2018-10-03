import { Field } from "./field.model";

export class RoleLGrant {
    id: number;
    active:boolean;
    roleId: number;
    objectId: number;
    recordtypeId: number;
    layoutId: number;
    createDate: string;
    createdBy: number;
    updateDate: string;
    updatedBy: number;
    createdByDescription: string;
    updatedByDescription: string;
}