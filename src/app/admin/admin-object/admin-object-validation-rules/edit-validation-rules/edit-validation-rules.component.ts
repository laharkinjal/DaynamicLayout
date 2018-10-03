import { Function } from './../../../models/function.model';
import { Breadcrumbservice } from './../../../../services/utility/bread-crumb.service';
import { ValidationRule } from './../../../models/validation-rule.model';
import { Field } from './../../../models/field.model';
import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../../services/utility/objects-utility.service';
import { ObjectsService } from '../../../services/objects.service';
import * as _ from 'lodash';
import { MessageService } from 'primeng/components/common/messageservice';
import { GenericutilService } from '../../../services/utility/genericutil.service';


@Component({
  selector: 'app-edit-validation-rules',
  templateUrl: './edit-validation-rules.component.html',
  styleUrls: ['./edit-validation-rules.component.css']
})
export class EditValidationRulesComponent implements OnInit {
  vrule: ValidationRule;
  searchFunctionResults: string[];
  selectedField: Field;

  constructor(
    private objectUtService: ObjectsUtilityService,
    private objectService: ObjectsService,
    private genericutility: GenericutilService,
    private breadCrumb:Breadcrumbservice,
    private msgServ: MessageService
  ) {
   }

  ngOnInit() {
    if(!this.objectUtService.selectedVRule){
      this.objectUtService.selectEmptyVRule();
    }
    this.vrule = this.objectUtService.deepcopy(this.objectUtService.selectedVRule);

    
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
    //If we set statement string into textarea using input.value, it will not reflect on maped variable so set value in vrule
    this.vrule.statement = this.genericutility.replaceFieldName(input.value, this.selectedField.name, input.selectionStart);

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
  
  saveVRule(){
    this.vrule.updateDate= new Date().toDateString();

    if(this.vrule.id){
      this.objectService.updateVRule(this.vrule.id, this.vrule).subscribe(
        res =>{
          this.objectUtService.vRuleEditMode = false;
          this.msgServ.add({
            severity: "success",
            summary: "Validation Rule",
            detail: "Validation Rule updated !"
          });
        }, 
        err =>{console.log(err);}
      );

      this.objectUtService.selectedVRule.name = this.vrule.name;
      this.objectUtService.selectedVRule.statement = this.vrule.statement;
      this.breadCrumb.regenerateBreadCrumbOfChild([this.vrule]);

    }else{

      this.vrule.objectId = this.objectUtService.selectedObject.id;

      return this.objectService.createVRule(this.vrule).subscribe(
        res =>{
          this.objectUtService.vRuleEditMode = false;
          this.vrule.id = res['id'];
          
          this.objectUtService.selectedObject.vrules.push(this.vrule);
          this.msgServ.add({
            severity: "success",
            summary: "Validation Rule",
            detail: "Validation Rule created !"
          });
        }, 
        err =>{console.log(err);}
      );
    }
  }

  checkSyntax(){
    this.objectService.checkSyntax(this.vrule.statement).subscribe(
      res =>{
        this.msgServ.add({
          severity: res?"success":"error",
          summary: "Syntax",
          detail: res?"Sucessfully verified !":"Error in syntax !"
        });
      });
  }

}
