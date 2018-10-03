import { BuUtilityService } from './../../services/utility/bu-utility.service';
import { BusinessUnitService } from './../../services/businessunit.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-businessunitform',
  templateUrl: './businessunitform.component.html',
  styleUrls: ['./businessunitform.component.css']
})
export class BusinessunitformComponent implements OnInit {

  public parentDropDown;
  @ViewChild('form') form;

  constructor(
    public buServ:BusinessUnitService,
    public msgServ:MessageService,
    public buUtilityServ:BuUtilityService
  ) { }

  ngOnInit() {
    this.parentDropDown = this.buUtilityServ.getAllActiveAsOptions();    
  }
  
  createBU(){
    
    if(this.buUtilityServ.selectedBu){
      this.buServ.updateBusinessUnit(this.buUtilityServ.selectedBu.id, this.buUtilityServ.buTemplate)
      .subscribe(
        data=>{
          this.form.reset();
          this.msgServ.add({
            severity:"success",
            summary:"Business Unit",
            detail:"Business Unit Updated !"
          });
          this.buUtilityServ.getAllList();
          
          this.buUtilityServ.selectedBu = null;
          this.buUtilityServ.resetBuTemplate();
        }
      );
    }
    else{
      this.buServ.createBusinessUnit(this.buUtilityServ.buTemplate).subscribe(
        data=>{
          this.form.reset();
          this.msgServ.add({
            severity:"success",
            summary:"Business Unit",
            detail:"Business Unit Created !"
          });
          this.buUtilityServ.getAllList();
        }
      );
    }
    
  }

  cancelCreate(){
    this.buUtilityServ.showCreateNew = false;
    this.buUtilityServ.selectedBu = null;
    this.buUtilityServ.resetBuTemplate();
  }

}
