import { Component, OnInit } from '@angular/core';
import { BuUtilityService } from './../../../services/utility/bu-utility.service';
import { RoleutilityService } from './../../../services/utility/roleutility.service';
import { ObjectName } from '../../../models/objectname.model';

@Component({
  selector: 'businessunit-l-grant',
  templateUrl: './businessunit-l-grant.component.html',
  styleUrls: ['./businessunit-l-grant.component.css']
})
export class BusinessunitLGrantComponent implements OnInit {

  constructor(
    private buUtilityServ: BuUtilityService,
    private roleUtiServ: RoleutilityService
  ) { }

  ngOnInit() {
  }

  // BN Select Object Name
  selectObjectName(objectName: ObjectName){
    this.buUtilityServ.selectedObject = objectName;
  }

  // BN Active/Deactive status of Role for selected ObjectName and BU
  changeActiveStatus(roleID, isActive) {
    let buID = this.buUtilityServ.selectedBu.id;
    let objectID = this.buUtilityServ.selectedObject.id;
    switch (isActive) {
      case false:
        this.roleUtiServ.disableRoleForobject(roleID, objectID, buID);
        break;
      case true:
        this.roleUtiServ.enableRoleForobject(roleID, objectID, buID);
        break;
    }
  }
}
