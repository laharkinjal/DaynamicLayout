import { Field } from './../../models/field.model';
import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { ObjectName } from '../../models/objectname.model';

@Component({
  selector: 'app-role-f-grant',
  templateUrl: './role-f-grant.component.html',
  styleUrls: ['./role-f-grant.component.css']
})
export class RoleFGrantComponent implements OnInit {

  constructor(
    public objectUtService: ObjectsUtilityService
  ) { }

  ngOnInit() {
  }

  // selectObjectName(objectName: ObjectName) {
  //   this.objectUtService.selectedObject = objectName;
  //   this.objectUtService.getFields(objectName.id);
  // }

  changeActiveStatus(fgrant, isActive: boolean) {
    this.objectUtService.roleObjectDataLoading =true;

    fgrant.active = isActive;
    if (isActive) {
      this.objectUtService.enableFGrant(fgrant.id);
    }
    else {
      this.objectUtService.disableFGrant(fgrant.id);
    }
  }
}
