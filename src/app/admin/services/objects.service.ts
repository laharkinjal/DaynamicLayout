import { map, catchError } from 'rxjs/operators';
import { Field } from './../models/field.model';
import { Layout } from './../models/layout.model';
import { ObjectName } from './../models/objectname.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecordType } from '../models/recordtype.model';
import { RoleLGrant } from '../models/roleL-grant.model';
import { RoleFGrant } from '../models/roleF-grant.model';
import { Role } from '../models/role.model';
import { RoleObject } from '../models/roleObject.model';
import { ValidationRule } from '../models/validation-rule.model';
import { Function } from '../models/function.model';
import { BusinessRule } from '../models/business-rule.model';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
   // private url ="/api";
   private url ="http://localhost:3000";
   private httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   };

  constructor(
    private http: HttpClient
  ) {}

  getFields(objectId: number): Observable<Field[]> {
    return this.http.get<Field[]>(this.url+"/objects/"+objectId+"/fields");
  }

  getLGrants(roleId:number, objectId: number): Observable<RoleLGrant[]> {
    return this.http.get<RoleLGrant[]>(this.url+"/rolelgrants?roleId="+roleId+"&objectId="+objectId+"&_expand=layout&_expand=recordtype");
  }

  getFGrants(roleId:number, objectId: number):Observable<RoleFGrant[]> {
    // return this.http.get<RoleFGrant[]>(this.url+"/roles/"+roleId+"/rolefgrants");
    return this.http.get<RoleFGrant[]>(this.url+"/rolefgrants?roleId="+roleId+"&objectId="+objectId+"&_expand=field"); 
  }

  enableFGrant(fgrantId: number){
    let payload = "{\"active\":true}";
    return this.http.patch(this.url+"/rolefgrants/"+fgrantId, payload, this.httpOptions);
  }

  disableFGrant(fgrantId: number){
    let payload = "{\"active\":false}";
    return this.http.patch(this.url+"/rolefgrants/"+fgrantId, payload, this.httpOptions);
  }

  enableLGrant(lgrantId:number){
    let payload = "{\"active\":true}";
    return this.http.patch(this.url+"/rolelgrants/"+lgrantId, payload, this.httpOptions );
  }

  disableLGrant(lgrantId:number){
    let payload = "{\"active\":false}";
    return this.http.patch(this.url+"/rolelgrants/"+lgrantId, payload, this.httpOptions );
  }

  /****** Object Modle ********/
  getRecordTypes(objectId: number):Observable<RecordType[]>{
    return this.http.get<RecordType[]>(this.url+"/objects/"+objectId+"/recordtypes");
  }

  getLayouts(recordtypeId: number):Observable<Layout[]>{
    return this.http.get<Layout[]>(this.url+"/recordtypes/"+recordtypeId+"/layouts");
  }

  deleteLayout(layoutId: number){
   return this.http.delete(this.url+"/layouts?id="+layoutId, this.httpOptions); 
  }

  getRoles(objectId: number):Observable<RoleObject[]>{
    return this.http.get<RoleObject[]>(this.url+"/objects/"+objectId+"/roleobjects?_expand=role"); 
  }

  getFunctions():Observable<Function[]>{
    return this.http.get<Function[]>(this.url+"/functions");
  }

  getVRules(objectId: number):Observable<ValidationRule[]>{
    return this.http.get<ValidationRule[]>(this.url+"/objects/"+objectId+"/vrules"); 
  }

  createVRule(payload){
    return this.http.post(this.url+"/vrules", payload, this.httpOptions);
  }
  
  updateVRule(vruleId:number, payload){
    return this.http.put(this.url+"/vrules/"+vruleId, payload, this.httpOptions);
  }

  deleteVRule(vruleId: number){
    return this.http.delete<ValidationRule>(this.url+"/vrules/"+vruleId, this.httpOptions);
  }

  getBRules(objectId: number):Observable<BusinessRule[]>{
    return this.http.get<BusinessRule[]>(this.url+"/objects/"+objectId+"/brules"); 
  }

  createBRule(payload){
    return this.http.post(this.url+"/brules", payload, this.httpOptions);
  }
  
  updateBRule(bruleId:number, payload){
    return this.http.put(this.url+"/brules/"+bruleId, payload, this.httpOptions);
  }

  deleteBRule(bruleId: number){
    return this.http.delete<BusinessRule>(this.url+"/brules/"+bruleId, this.httpOptions);
  }

  checkSyntax(syntax: string):Observable<Boolean>{
    return new Observable<Boolean>((subscriber: Subscriber<Boolean>) => subscriber.next(Math.floor(Math.random() * 10)%2===0));
  }

  getAllObjects(): Observable<ObjectName[]> {
    return this.http.get<ObjectName[]>(this.url+'/objects');
  }

  addObject(payload){
    return this.http.post(this.url + '/objects', payload, this.httpOptions);
  }

  editObject(objId:number, payload){
    return this.http.put(this.url + '/objects/' + objId, payload, this.httpOptions);
  }

  deleteObject(objId: number){
    return this.http.delete(this.url + '/objects/' + objId, this.httpOptions);
  }

  addField(payload){
    return this.http.post(this.url + '/fields', payload, this.httpOptions);
  }

  editField(fieldId:number, payload){
    return this.http.put(this.url + '/fields/' + fieldId, payload, this.httpOptions);
  }

  deleteField(fieldId: number){
    return this.http.delete(this.url + '/fields/' + fieldId, this.httpOptions);
  }
}
