import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';
import { ValidationRule } from '../../models/validation-rule.model';
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-admin-object-validation-rules',
  templateUrl: './admin-object-validation-rules.component.html',
  styleUrls: ['./admin-object-validation-rules.component.css']
})
export class AdminObjectValidaitonRulesComponent implements OnInit {
  public cols = [
    { field: "name", header: "Name" },
    { field: "description", header: "Description" },
    { field: "createdBy", header: "Created by" },
    { field: "active", header: "Status" }
  ];
  constructor(
    private objectUtServ: ObjectsUtilityService,
    private breadCrumb:Breadcrumbservice,
    private confirmationService: ConfirmationService,
    private msgServ: MessageService,
  ) { }

  ngOnInit() {
  }

  private selectVRule(vrule: ValidationRule){
    this.objectUtServ.selectedVRule = vrule;
    this.breadCrumb.regenerateBreadCrumbOfChild([vrule]);
  }
}
