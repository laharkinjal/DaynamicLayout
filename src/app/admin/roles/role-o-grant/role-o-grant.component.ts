import { ObjectName } from './../../models/objectname.model';
import { Component, OnInit } from '@angular/core';
import { RoleService } from './../../services/roles.service';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { RoleObject } from '../../models/roleObject.model';

@Component({
  selector: 'app-role-o-grant',
  templateUrl: './role-o-grant.component.html',
  styleUrls: ['./role-o-grant.component.css']
})
export class RoleOGrantComponent implements OnInit {
  public cols = [
    // { field: "name", header: "Objects" },
    { field: "create", header: "Create" },
    { field: "read", header: "Read" },
    { field: "update", header: "Update" },
    { field: "delete", header: "Delete" },
  ];

  public filters = [
    { value: "true", label: "Standart" },
    { value: "false", label: "Custom" },
  ];

  selectedFilter: string;
  
  constructor(
    public roleUtServ: RoleutilityService,
    public objectUtService: ObjectsUtilityService
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
    let oldLevel = -1;


    this.roleUtServ.selectedRole.roleobjects.forEach(roleobject => {
      //Upate access level only for objects of selected filters
      if(this.selectedFilter== undefined || roleobject.object.isStandard == Boolean(this.selectedFilter==='true')){
        if(oldLevel === -1){
          oldLevel = roleobject[levelText];
        }

        if(oldLevel != roleobject[levelText]){
          shouldUpdate = false;
        }
        objects.push(roleobject);
      }
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
