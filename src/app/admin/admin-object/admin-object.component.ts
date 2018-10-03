import { ObjectsService } from './../services/objects.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Component, OnInit } from '@angular/core';
import { Breadcrumbservice } from '../../services/utility/bread-crumb.service';
import { ObjectsUtilityService } from '../services/utility/objects-utility.service';
import { RoleutilityService } from '../services/utility/roleutility.service';
import { MessageService } from 'primeng/components/common/messageservice';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-admin-object',
  templateUrl: './admin-object.component.html',
  styleUrls: ['./admin-object.component.css']
})
export class AdminObjectComponent implements OnInit {

  public selectedTabIndex = 0;
  constructor (
    private objectUtService: ObjectsUtilityService,
    private objectService: ObjectsService,
    private roleUtServ: RoleutilityService,
    public breadCrumbServ: Breadcrumbservice,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.breadCrumbServ.breadCrumbDataModel = [
      { label: 'Admin' },
      { label: 'Objects' }
    ];
  }

  editObject() {
    this.objectUtService.objectTemplate.objectName = this.objectUtService.selectedObject.objectName;
    this.objectUtService.objectTemplate.description = this.objectUtService.selectedObject.description;
    this.objectUtService.objectTemplate.apiName = this.objectUtService.selectedObject.apiName;
    this.objectUtService.objectTemplate.helpText = this.objectUtService.selectedObject.helpText;
    this.objectUtService.showOnFormTab = 'Objects';
    this.objectUtService.editMode = true;
    this.objectUtService.showFormTab = true;
  }

  addObjectField() {
    this.objectUtService.resetFieldTemplate();
    this.objectUtService.editMode = false;
    this.objectUtService.showOnFormTab = 'Fields';
    this.objectUtService.showFormTab = true;
  }

  handleChange(e) {
    this.selectedTabIndex = e.index;
    let selectedTabElement;
    
    //Validation Rule
    if(e.index == 2){
      this.objectUtService.roleObjectDataLoading = true;
      this.objectUtService.selectedVRule = null;
      let vrules = this.objectService.getVRules(this.objectUtService.selectedObject.id);
      let fields = this.objectService.getFields(this.objectUtService.selectedObject.id);
      let functions = this.objectService.getFunctions();

      combineLatest(vrules, fields, functions).subscribe(
        res =>{
          this.objectUtService.selectedObject.vrules = res[0];
          this.objectUtService.selectedObject.fields = res[1];
          this.objectUtService.allFunctions = res[2];
          this.objectUtService.roleObjectDataLoading = false;
        }
      );
    }
    //Business Rules
    else if(e.index == 3){
      this.objectUtService.roleObjectDataLoading = true;
      this.objectUtService.selectedBRule = null;
      let brules = this.objectService.getBRules(this.objectUtService.selectedObject.id);
      let fields = this.objectService.getFields(this.objectUtService.selectedObject.id);
      let functions = this.objectService.getFunctions();

      combineLatest(brules, fields, functions).subscribe(
        res =>{
          this.objectUtService.selectedObject.brules = res[0];
          this.objectUtService.selectedObject.fields = res[1];
          this.objectUtService.allFunctions = res[2];
          this.objectUtService.roleObjectDataLoading = false;
        }
      );
    }
    //Layout
    else if(e.index == 4){
      this.objectUtService.selectedRecordType = null;
      this.objectUtService.roleObjectDataLoading = true;
      this.objectUtService.getRecordTypes(this.objectUtService.selectedObject.id);
    }
    //Role
    else if(e.index == 5){
      this.objectUtService.roleObjectDataLoading = true;
      this.objectUtService.getRoles(this.objectUtService.selectedObject.id);
    }

    if(selectedTabElement){
      this.breadCrumbServ.regenerateBreadCrumbOfChild([selectedTabElement]);
    }else if(this.breadCrumbServ.breadCrumbTreeDataModel.length > 1){
      this.breadCrumbServ.breadCrumbTreeDataModel.splice(1);
    }
  }
  addVRule(){
    this.objectUtService.vRuleEditMode = true;
    this.objectUtService.selectedVRule = null;
    this.objectUtService.selectEmptyVRule();
  }

  editVRule(){
    if(this.breadCrumbServ.breadCrumbTreeDataModel.length>1)
    {
      this.objectUtService.selectedVRule = this.breadCrumbServ.breadCrumbTreeDataModel[1].elevalue;
      this.objectUtService.vRuleEditMode = true;
    }
  }

  deleteVRule(){
    let vruleArray = this.breadCrumbServ.breadCrumbTreeDataModel;
    if(vruleArray.length >1){
      let deleteChildId = vruleArray[1].elevalue.id;
    
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.objectUtService.roleObjectDataLoading= true;
          
          return this.objectService.deleteVRule(deleteChildId).subscribe(res =>{
            _.remove(this.objectUtService.selectedObject.vrules, function(vrule){
                return vrule.id == deleteChildId;
            });
            this.breadCrumbServ.regenerateBreadCrumbOfChild(null);

            this.objectUtService.roleObjectDataLoading= false;
            this.messageService.add({
              severity: "success",
              summary: "Validation Rule",
              detail: "Validation Rule deleted !"
            });
          },
          err => {
            console.log(err);
            this.objectUtService.roleObjectDataLoading= false;
          });
        }
      });
    }
  }

  addBRule(){
    this.objectUtService.bRuleEditMode = true;
    this.objectUtService.selectedBRule = null;
    this.objectUtService.selectEmptyBRule();
  }

  editBRule(){
    if(this.breadCrumbServ.breadCrumbTreeDataModel.length>1)
    {
      this.objectUtService.selectedBRule = this.breadCrumbServ.breadCrumbTreeDataModel[1].elevalue;
      this.objectUtService.bRuleEditMode = true;
    }
  }

  deleteBRule(){
    let bruleArray = this.breadCrumbServ.breadCrumbTreeDataModel;
    if(bruleArray.length >1){
      let deleteChildId = bruleArray[1].elevalue.id;
    
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.objectUtService.roleObjectDataLoading= true;
          
          return this.objectService.deleteBRule(deleteChildId).subscribe(res =>{
            _.remove(this.objectUtService.selectedObject.brules, function(brule){
                return brule.id == deleteChildId;
            });
            this.breadCrumbServ.regenerateBreadCrumbOfChild(null);

            this.objectUtService.roleObjectDataLoading= false;
            this.messageService.add({
              severity: "success",
              summary: "Business Rule",
              detail: "Business Rule deleted !"
            });
          },
          err => {
            console.log(err);
            this.objectUtService.roleObjectDataLoading= false;
          });
        }
      });
    }
  }
}
