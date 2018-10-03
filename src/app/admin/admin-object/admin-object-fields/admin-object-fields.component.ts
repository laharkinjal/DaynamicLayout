import { Component, OnInit } from '@angular/core';
import {Breadcrumbservice} from '../../../services/utility/bread-crumb.service';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';

@Component({
  selector: 'app-admin-object-fields',
  templateUrl: './admin-object-fields.component.html',
  styleUrls: ['./admin-object-fields.component.css']
})
export class AdminObjectFieldsComponent implements OnInit {

  selectedTabIndex = 0;

  public cols = [
    { field: 'name', header: 'Name' }
  ];

  constructor(public objectUtServ: ObjectsUtilityService,
              private breadCrumb: Breadcrumbservice
  ) { }

  ngOnInit() {
  }

  selectObjectField(objectField) {
    this.objectUtServ.selectedField = objectField;
    this.breadCrumb.breadCrumbTreeDataModel.push({ label: objectField.name });
  }

  editObjectField(obj) {
    this.objectUtServ.showOnFormTab = 'Fields';
    this.objectUtServ.editMode = true;
    this.objectUtServ.selectedField = obj;
    this.objectUtServ.fieldTemplate.name = this.objectUtServ.selectedField.name;
    this.objectUtServ.fieldTemplate.description = this.objectUtServ.selectedField.description;
    this.objectUtServ.fieldTemplate.apiName = this.objectUtServ.selectedField.apiName;
    this.objectUtServ.fieldTemplate.help = this.objectUtServ.selectedField.help;
    this.objectUtServ.fieldTemplate.mandatory = this.objectUtServ.selectedField.mandatory;
    this.objectUtServ.fieldTemplate.secure = this.objectUtServ.selectedField.secure;
    this.objectUtServ.fieldTemplate.unique = this.objectUtServ.selectedField.unique;
    this.objectUtServ.fieldTemplate.defaultValue = this.objectUtServ.selectedField.defaultValue;
    this.objectUtServ.fieldTemplate.type = this.objectUtServ.selectedField.type;
    this.objectUtServ.fieldTemplate.length = this.objectUtServ.selectedField.length;
    this.objectUtServ.fieldTemplate.decimals = this.objectUtServ.selectedField.decimals;
    this.objectUtServ.fieldTemplate.autogen = this.objectUtServ.selectedField.autogen;
    this.objectUtServ.fieldTemplate.lov = this.objectUtServ.selectedField.lov;
    this.objectUtServ.fieldTemplate.formula = this.objectUtServ.selectedField.formula;
    this.objectUtServ.fieldTemplate.refObject = this.objectUtServ.selectedField.refObject;
    this.objectUtServ.fieldTemplate.basicSearch = this.objectUtServ.selectedField.basicSearch;
    this.objectUtServ.fieldTemplate.advancedSearch = this.objectUtServ.selectedField.advancedSearch;
    this.objectUtServ.fieldTemplate.searchType = this.objectUtServ.selectedField.searchType;
    this.objectUtServ.showFormTab = true;
  }

  deleteObjectField(id) {
    if (this.objectUtServ.selectedField) {
      if (this.objectUtServ.selectedField.id === id) {
        this.objectUtServ.selectedField = null;
      }
    }
    this.objectUtServ.deleteField(id);
  }

  handleChange(e) {
    this.selectedTabIndex = e.index;
  }

}
