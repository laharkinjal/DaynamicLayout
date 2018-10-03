import { BusinessRule } from './../../../models/business-rule.model';
import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/field.model';
import { ObjectsService } from '../../../services/objects.service';
import { ObjectsUtilityService } from '../../../services/utility/objects-utility.service';
import { Function } from '../../../models/function.model';
import { MessageService } from 'primeng/components/common/messageservice';
import { Breadcrumbservice } from '../../../../services/utility/bread-crumb.service';
import { GenericutilService } from '../../../services/utility/genericutil.service';

@Component({
  selector: 'app-edit-business-rules',
  templateUrl: './edit-business-rules.component.html',
  styleUrls: ['./edit-business-rules.component.css']
})
export class EditBusinessRulesComponent implements OnInit {
  brule: BusinessRule;
  searchFunctionResults: string[];
  selectedField: Field;

  constructor(
    private objectUtService: ObjectsUtilityService,
    private objectService: ObjectsService,
    private genericutility: GenericutilService,
    private breadCrumb:Breadcrumbservice,
    private msgServ: MessageService
  ) { }

  ngOnInit() {
    if(!this.objectUtService.selectedBRule){
      this.objectUtService.selectEmptyBRule();
    }
    this.brule = this.objectUtService.deepcopy(this.objectUtService.selectedBRule);
  }

  selectFunction(functionName, input){
    let selectedFunction = this.objectUtService.allFunctions.filter(function(func){
      return func.name === functionName;
    });

    let selectionStart = input.selectionStart;
    let value = input.value;
    input.value = value.substring(0, selectionStart) + selectedFunction[0].syntax + value.substring(selectionStart);
  }
  
  selectField(event, input) {
    //If we set statement string into textarea using input.value, it will not reflect on maped variable so set value in brule
    this.brule.statement = this.genericutility.replaceFieldName(input.value, this.selectedField.name, input.selectionStart);
  }

  searchFunction(event) {
    this.searchFunctionResults = [];
    const self = this;
    this.objectUtService.allFunctions.forEach(function(func){
      if(func.name && func.name.indexOf(event.query)!=-1){
        self.searchFunctionResults.push(func.name);
      }
    });
  }

  saveBRule(){
    this.brule.updateDate= new Date().toDateString();
    if(this.brule.id){
      this.objectService.updateBRule(this.brule.id, this.brule).subscribe(
        res =>{
          this.objectUtService.bRuleEditMode = false;
          this.msgServ.add({
            severity: "success",
            summary: "Business Rule",
            detail: "Business Rule updated !"
          });
        }, 
        err =>{console.log(err);}
      );

      this.objectUtService.selectedBRule.name = this.brule.name;
      this.objectUtService.selectedBRule.statement = this.brule.statement;
      this.objectUtService.selectedBRule.action = this.brule.action;
      this.objectUtService.selectedBRule.insert = this.brule.insert;
      this.objectUtService.selectedBRule.update = this.brule.update;
      this.objectUtService.selectedBRule.delete = this.brule.delete;
      this.breadCrumb.regenerateBreadCrumbOfChild([this.brule]);

    }else{

      this.brule.objectId = this.objectUtService.selectedObject.id;
      return this.objectService.createBRule(this.brule).subscribe(
        res =>{
          this.objectUtService.bRuleEditMode = false;
          this.brule.id = res['id'];
          
          this.objectUtService.selectedObject.brules.push(this.brule);
          this.msgServ.add({
            severity: "success",
            summary: "Business Rule",
            detail: "Business Rule created !"
          });
        }, 
        err =>{console.log(err);}
      );
    }
  }

  checkSyntax(){
    this.objectService.checkSyntax(this.brule.statement).subscribe(
      res =>{
        this.msgServ.add({
          severity: res?"success":"error",
          summary: "Syntax",
          detail: res?"Sucessfully verified !":"Error in syntax !"
        });
      });
  }

}
