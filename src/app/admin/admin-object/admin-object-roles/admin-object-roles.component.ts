import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';
import { RoleObject } from '../../models/roleObject.model';
import { RoleutilityService } from '../../services/utility/roleutility.service';

@Component({
  selector: 'app-admin-object-roles',
  templateUrl: './admin-object-roles.component.html',
  styleUrls: ['./admin-object-roles.component.css']
})
export class AdminObjectRolesComponent implements OnInit {
  public cols = [
    { field: "create", header: "Create" },
    { field: "read", header: "Read" },
    { field: "update", header: "Update" },
    { field: "delete", header: "Delete" },
  ];

  constructor(
    private objectUtService: ObjectsUtilityService,
    private roleUtServ: RoleutilityService
  ) { }

  ngOnInit() {
  }

  public updateCreateLevel(roleobject: RoleObject) {
    this.roleUtServ.roleDataLoading = true;

    let level = 0;
    if (roleobject.create < 16) {
      level = Math.max(roleobject.create * 2, 2)
    }
    roleobject.create = level;

    this.roleUtServ.updateObjectAccessLevel(roleobject.id, 'create', level);
  }

  public updateReadLevel(roleobject: RoleObject) {
    this.roleUtServ.roleDataLoading = true;

    let level = 0;
    if (roleobject.read < 16) {
      level = Math.max(roleobject.read * 2, 2)
    }
    roleobject.read = level;

    this.roleUtServ.updateObjectAccessLevel(roleobject.id, 'read', level);
  }

  public updateUpdateLevel(roleobject: RoleObject) {
    this.roleUtServ.roleDataLoading = true;
    
    let level = 0;
    if (roleobject.update < 16) {
      level = Math.max(roleobject.update * 2, 2)
    }
    roleobject.update = level;

    this.roleUtServ.updateObjectAccessLevel(roleobject.id, 'update', level);
  }

  public updateDeleteLevel(roleobject: RoleObject) {
    this.roleUtServ.roleDataLoading = true;
    
    let level = 0;
    if (roleobject.delete < 16) {
      level = Math.max(roleobject.delete * 2, 2)
    }
    roleobject.delete = level;

    this.roleUtServ.updateObjectAccessLevel(roleobject.id, 'delete', level);
  }

  public accessLevelClick(levelText: string) {
    let shouldUpdate = true;
    let objects = [];
    let oldLevel = this.objectUtService.selectedObject.roleObjects[0][levelText];

    this.objectUtService.selectedObject.roleObjects.forEach(roleobject => {
      //Upate access level only for objects of selected filters
      if(oldLevel != roleobject[levelText]){
        shouldUpdate = false;
      }
      objects.push(roleobject);
    });

    //Calculate accesslevel digit
    let level = 0;
    if(shouldUpdate){
      if (oldLevel < 16) {
        level = Math.max(oldLevel * 2, 2)
      }
    }
    
    objects.forEach(roleobject => {
        this.roleUtServ.roleDataLoading = true;
        
        //Updat existing object access level
        roleobject[levelText] = level;
        this.roleUtServ.updateObjectAccessLevel(roleobject.id, levelText, level);
    });
  }
}
