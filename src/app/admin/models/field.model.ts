export class Field {
    id?: number;
    name: string;
    system: boolean;
    active: boolean;
    objectId: number;
    createDate: string;
    createdBy: number;
    updateDate: string;
    updatedBy: number;
    createdByDescription: string;
    updatedByDescription: string;
    description: string;

    key: string;
    help: string;
    apiName: string;
    mandatory: boolean;
    secure: boolean;
    unique: boolean;
    defaultValue: string;
    custom: boolean;
    type: string;
    length: number;
    decimals: number;
    autogen: boolean;
    sequenceName: string;
    format: string;
    lov: string;
    formula: string;
    refObject: number;
    refObjectName: string;
    basicSearch: boolean;
    advancedSearch: boolean;
    searchType: string;
}