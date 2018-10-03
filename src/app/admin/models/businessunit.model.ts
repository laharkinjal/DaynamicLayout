export class BusinessUnit{
  createDate?: string;
  createdBy?: string;
  createdByDescription?: string;  
  updateDate?: string;
  updatedBy?: number;
  updatedByDescription?: string;
  description: string;
  active: boolean;
  root: boolean;
  id?:number;
  name: string;
  parentId: number;
}