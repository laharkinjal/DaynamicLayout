import { RecordType } from './../../models/recordtype.model';
import { Layout } from './../../models/layout.model';
import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { ObjectName } from '../../models/objectname.model';
import { RoleLGrant } from '../../models/roleL-grant.model';

@Component({
  selector: 'app-role-l-grant',
  templateUrl: './role-l-grant.component.html',
  styleUrls: ['./role-l-grant.component.css']
})
export class RoleLGrantComponent implements OnInit {

  constructor(
    public objectUtService: ObjectsUtilityService,
    private roleUtiServ: RoleutilityService
  ) { }

  ngOnInit() {
  }
 
  // selectObjectName(objectName: ObjectName){
  //   this.objectUtService.selectedObject = objectName;
  //   this.objectUtService.getRecordTypes(objectName.id);
  // }

  changeActiveStatus(lgrant: RoleLGrant, isActive: boolean) {
    this.objectUtService.roleObjectDataLoading =true;
    lgrant.active=isActive;
    
    if(isActive){
      this.objectUtService.enableLGrant(lgrant.id);
    }else{
      this.objectUtService.disableLGrant(lgrant.id);
    }
  } 
}
