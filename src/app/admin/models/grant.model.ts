export class Grant{
  createDate?: string;
  createdBy?: string;
  createdByDescription?: string;  
  updateDate?: string;
  updatedBy?: number;
  updatedByDescription?: string;
  description: string;
  active: boolean;
  system:boolean;
  id?:number;
  name: string;
  roleId:number;
}