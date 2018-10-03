import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';

@Component({
  selector: 'app-admin-object-form',
  templateUrl: './admin-object-form.component.html',
  styleUrls: ['./admin-object-form.component.css']
})
export class AdminObjectFormComponent implements OnInit {

  
  GENERIC_SEARCH_TYPE = ['Exact', 'Contains', 'Range'];
  STRING_SEARCH_TYPE=['Exact', 'Contains'];
  NUMBER_SEARCH_TYPE=['Exact', 'Range'];
  DATE_SEARCH_TYPE=['Exact', 'Range'];
  
  FIELD_SEARCH_TYPE  = [];
  TYPES=[];


  constructor(
    public objectUtServ: ObjectsUtilityService,
    public messageSerive: MessageService) { }

  ngOnInit() {
    this.TYPES = [
       { 'name':'Auto', 'search': this.GENERIC_SEARCH_TYPE},
       { 'name':'Check Box', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Currency', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'Date', 'search': this.DATE_SEARCH_TYPE}, 
       { 'name':'Date Time', 'search': this.DATE_SEARCH_TYPE},
       { 'name': 'Email', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Formula', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Reference', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Geo Location', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Number', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'Big Number', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'String', 'search': this.STRING_SEARCH_TYPE}, 
       { 'name':'Percent', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'Real', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'Big Real', 'search': this.NUMBER_SEARCH_TYPE}, 
       { 'name':'Pick List', 'search': this.GENERIC_SEARCH_TYPE}, 
       { 'name':'Multi Pick List', 'search': this.GENERIC_SEARCH_TYPE}
      ];

  }

  onChangeType(newValue) {
    
  }

  changeType(){
    let selectedType = this.objectUtServ.fieldTemplate.type;

    this.FIELD_SEARCH_TYPE = this.TYPES.filter(function(type){
        return type.name === selectedType;
    })[0].search;
  }

  createObject() {
    if (this.objectUtServ.editMode) {
      this.objectUtServ.editObject(Object.assign({}, this.objectUtServ.selectedObject, {
        objectName: this.objectUtServ.objectTemplate.objectName,
        description: this.objectUtServ.objectTemplate.description,
        apiName: this.objectUtServ.objectTemplate.apiName,
        helpText: this.objectUtServ.objectTemplate.helpText,
        updateDate: new Date(),
        updatedBy: 'Admin'
      }));
    } else {
      this.objectUtServ.addObject(Object.assign({}, this.objectUtServ.objectTemplate, {
        createDate: new Date(),
        createdBy: 'Admin'
      }));
    }
  }

  createField() {
    if (this.objectUtServ.editMode) {
      this.objectUtServ.editField(Object.assign({}, this.objectUtServ.selectedField, {
        name: this.objectUtServ.fieldTemplate.name,
        description: this.objectUtServ.fieldTemplate.description,
        apiName: this.objectUtServ.fieldTemplate.apiName,
        help: this.objectUtServ.fieldTemplate.help,
        mandatory: this.objectUtServ.fieldTemplate.mandatory,
        secure: this.objectUtServ.fieldTemplate.secure,
        unique: this.objectUtServ.fieldTemplate.unique,
        defaultValue: this.objectUtServ.fieldTemplate.defaultValue,
        type: this.objectUtServ.fieldTemplate.type,
        length: this.objectUtServ.fieldTemplate.length,
        decimals: this.objectUtServ.fieldTemplate.decimals,
        autogen: this.objectUtServ.fieldTemplate.autogen,
        sequenceName: this.objectUtServ.fieldTemplate.sequenceName,
        format: this.objectUtServ.fieldTemplate.format,
        lov: this.objectUtServ.fieldTemplate.lov,
        formula: this.objectUtServ.fieldTemplate.formula,
        refObject: this.objectUtServ.fieldTemplate.refObject,
        basicSearch: this.objectUtServ.fieldTemplate.basicSearch,
        advancedSearch: this.objectUtServ.fieldTemplate.advancedSearch,
        searchType: this.objectUtServ.fieldTemplate.searchType
      }));
    } else {
      this.objectUtServ.addField(Object.assign({}, this.objectUtServ.fieldTemplate, {
        objectId: this.objectUtServ.selectedObject.id,
        createDate: new Date(),
        createdBy: 'Admin'
      }));
    }
  }

}
