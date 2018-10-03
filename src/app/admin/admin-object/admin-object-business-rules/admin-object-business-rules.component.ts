import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';
import { BusinessRule } from '../../models/business-rule.model';

@Component({
  selector: 'app-admin-object-business-rules',
  templateUrl: './admin-object-business-rules.component.html',
  styleUrls: ['./admin-object-business-rules.component.css']
})
export class AdminObjectBusinessRulesComponent implements OnInit {

  public cols = [
    { field: "name", header: "Name" },
    { field: "description", header: "Description" },
    { field: "createdBy", header: "Created by" },
    { field: "active", header: "Status" }
  ];
  constructor(
    private objectUtServ: ObjectsUtilityService,
    private breadCrumb:Breadcrumbservice
  ) { }

  ngOnInit() {
  }

  private selectBRule(brule: BusinessRule){
    this.objectUtServ.selectedBRule = brule;
    this.breadCrumb.regenerateBreadCrumbOfChild([brule]);
  }
}
