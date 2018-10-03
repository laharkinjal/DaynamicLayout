import { BusinessUnit } from './../models/businessunit.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/users.model';
import { Role } from '../models/role.model';


@Injectable({
  providedIn: "root"
})
export class BusinessUnitService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public selectedBu;

  constructor(
    private http: HttpClient
  ) {

  }

  getAllBusinessUnits(): Observable<BusinessUnit[]> {
    return this.http.get<BusinessUnit[]>("/api/bu");
  }

  getAllActiveBu(): Observable<BusinessUnit[]> {
    return this.http.get<BusinessUnit[]>("/api/bu/active");
  }

  searchBusinessUnit(searchPayload): Observable<BusinessUnit[]> {
    return this.http.post<BusinessUnit[]>("/api/bu/search", searchPayload, this.httpOptions);
  }

  createBusinessUnit(buPayload): Observable<any> {
    return this.http.post("/api/bu", buPayload, this.httpOptions);
  }

  updateBusinessUnit(id, buPayload): Observable<any> {
    return this.http.put("/api/bu/" + id, buPayload, this.httpOptions);
  }

  getChildren(buId): Observable<BusinessUnit[]> {
    return this.http.get<BusinessUnit[]>("/api/bu/" + buId + "/children");
  }

  enableBu(id): Observable<any> {
    return this.http.put("/api/bu/" + id + "/enable", {});
  }

  getBuRoles(id: Number): Observable<any> {
    return this.http.delete("/api/bu/" + id);
  }

  disableBu(id): Observable<any> {
    return this.http.put("/api/bu/" + id + "/disable", {});
  }

  deleteBu(id): Observable<any> {
    return this.http.delete("/api/bu/" + id);
  }

  getAllUsersByBusinessUnitId(id: number): Observable<User[]> {
    return this.http.get<User[]>("/api/bu/" + id + "/users");
  }

  // BN
  getAllAssignedRoles(id: number): Observable<any> {
    return this.http.get<any>(`/api/bu/${id}/roles`);
  }

  // BN
  saveDropedRole(id: number, userId: number, roleId: number): Observable<any[]> {
    return this.http.put<any[]>(`/api/bu/${id}/roles/${roleId}`, {});
  }

  // BN
  getAllNetRoles(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/roles/recursive`);
  }

  // BN
  getAllNetGrants(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/grants/recursive`);
  }

  // BN
  getAllNetObjects(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/objects/recursive`);
  }

  // BN
  getAllNetOGrants(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/ogrants/recursive`);
  }

  // BN
  getAllNetFgrants(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/fgrants/recursive`);
  }

  // BN
  getAllNetLGrants(id: number): Observable<Role[]> {
    return this.http.get<Role[]>(`/api/bu/${id}/lgrants/recursive`);
  }

  // BN
  getAllRoles(): Observable<any> {
    return this.http.get<Role[]>("/api/roles");
  }
}
