import { Breadcrumbservice } from './../../services/utility/bread-crumb.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Grant } from './../models/grant.model';
import { GrantsService } from './../services/grants.service';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {

  public grants:Grant[];
  

  constructor(
    public grantServ:GrantsService,
    public breadCrumbServ:Breadcrumbservice
  ) { }

  ngOnInit() {
    this.breadCrumbServ.breadCrumbDataModel = [
      {label: "Admin"},
      {label: "Grants"}
    ];
    this.grantServ.getAllGrants().subscribe(
      (grants:Grant[])=>{
        this.grants = grants;
      }
    );
  }

}
