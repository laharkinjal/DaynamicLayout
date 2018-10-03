import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Role } from './../models/role.model';
import { Grant } from "../models/grant.model";
import { RoleObject } from "../models/roleObject.model";

@Injectable({
  providedIn: "root"
})

export class RoleService {
  // private url ="/api";
  private url ="http://localhost:3000";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {

  }
  createRole(payload){
    return this.http.post(this.url+"/roles", payload, this.httpOptions);
  }
  updateRole(roleId:number, payload){
    return this.http.put(this.url+"/roles/"+roleId, payload, this.httpOptions);
  }
  deleteRole(roleId: number){ 
    return this.http.delete(this.url+"/roles/"+roleId, this.httpOptions);
  }

  getAllRoles(): Observable<Role[]> {
    // return this.http.get<Role[]>("/api/roles/" + roleId + "/children");
    return this.http.get<Role[]>(this.url+"/roles");
  }
  getChildren(roleId): Observable<Role[]> {
    // return this.http.get<Role[]>("/api/roles/" + roleId + "/children");
    return this.http.get<Role[]>(this.url+"/roles?parentId=" + roleId);
  }
  addChildren(roleId: number, parentId:number){
    let payload= "{\"parentId\":"+parentId+"}";
    return this.http.patch(this.url+"/roles/"+roleId, payload, this.httpOptions);
  }

  deleteChildren(childrenId:number){ 
    let payload = "{\"parentId\":null}";
    return this.http.patch(this.url+"/roles/"+childrenId, payload, this.httpOptions);
  }

  getRoleObjects(roleId: number): Observable<RoleObject[]> {
    return this.http.get<RoleObject[]>(this.url+"/roles/"+roleId+"/roleobjects?_expand=object");
  }
  
  updateObjectAccessLevel(roleObjectId:number, payload){
    return this.http.patch(this.url+"/roleobjects/"+roleObjectId, payload, this.httpOptions);
  }

  // updateRoleObjectsAccessLevel(roleId:number, payload){
  //   return this.http.patch(this.url+"/roles/"+roleId+"/objects", payload, this.httpOptions);
  // }

  getAllGrants(roleId:number): Observable<Grant[]>{
    // return this.http.get<Grant[]>(this.url+"/roles/"+roleId+"/grants");
    return this.http.get<Grant[]>(this.url+"/grants");
  }

  getAssignedGrants(roleId:number): Observable<Grant[]>{
    // return this.http.get<RoleGrant[]>(this.url+"/rolegrants?roleId="+roleId+"&_expand=grant");
    return this.http.get<Grant[]>(this.url+"/roles/"+roleId+"/grants");
  }

  saveAssignedGrant(grantId:number, roleId: number){
    let payload="{\"roleId\":"+roleId+"}";
    return this.http.patch(this.url+"/grants/"+grantId, payload, this.httpOptions);
  }
  
  releaseAssignedGrant(grantId:number){
    let payload="{\"roleId\": null}";
    return this.http.patch(this.url+"/grants/"+grantId, payload, this.httpOptions);
  }
  
  searchRoles(searchPayload): Observable<Role[]> {
    return this.http.post<Role[]>("/api/roles/search", searchPayload, this.httpOptions);
  }
}
