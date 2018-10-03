import { ObjectName } from './../../models/objectname.model';
import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { ObjectsService } from './../../services/objects.service';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-objectlist',
  templateUrl: './objectlist.component.html',
  styleUrls: ['./objectlist.component.css']
})
export class ObjectlistComponent implements OnInit {

  constructor(
    public objectService: ObjectsService,
    public objectUtService: ObjectsUtilityService,
    public roleUtServ: RoleutilityService
  ) { }

  ngOnInit() {
  }

  selectObjectName(objectName: ObjectName){
    this.objectUtService.roleObjectDataLoading = true;
    this.objectUtService.selectedObject = objectName;
    
    let fGrants = this.objectService.getFGrants(this.roleUtServ.selectedRole.id, objectName.id);
    let lGrants = this.objectService.getLGrants(this.roleUtServ.selectedRole.id, objectName.id);
    combineLatest(fGrants, lGrants).subscribe(res => {
      let fGrantRes = res[0];
      let lGrantRes = res[1];

      this.objectUtService.selectedObject.fgrants = fGrantRes;
      this.objectUtService.selectedObject.lgrants = lGrantRes;

      this.objectUtService.roleObjectDataLoading = false;
    });
  }

}
