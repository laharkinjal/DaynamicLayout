import { Field } from "./field.model";
import { RoleFGrant } from "./roleF-grant.model";
import { RoleLGrant } from "./roleL-grant.model";
import { RoleObject } from "./roleObject.model";
import { ValidationRule } from "./validation-rule.model";
import { RecordType } from "./recordtype.model";
import { BusinessRule } from "./business-rule.model";

export class ObjectName {
    id?: number;
    objectName: string;
    description: string;
    isStandard: boolean;
    masterObject: number;
    apiName: string;
    helpText: string;
    nameField: string[];
    objectCode:	string;
    createDate: string;
    createdBy: number;
    updateDate: string;
    updatedBy: number;
    createdByDescription: string;
    updatedByDescription: string;
    
    fgrants?: RoleFGrant[];
    lgrants?: RoleLGrant[];
    fields?: Field[];
    vrules?: ValidationRule[];
    brules?: BusinessRule[];

    roleObjects?: RoleObject[];
    recordtypes?: RecordType[];   
}