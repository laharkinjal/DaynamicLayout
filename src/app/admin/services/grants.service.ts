import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Grant } from './../models/grant.model';


@Injectable({
  providedIn:"root"
})
export class GrantsService{

  constructor(
    private http:HttpClient
  ){

  }

  getAllGrants():Observable<Grant[]>{
    return this.http.get<Grant[]>("/api/grants/all");
  }

  getGrantByUser(userId):Observable<Grant[]>{
    return this.http.get<Grant[]>("/api/grants/users/"+userId);
  }
}