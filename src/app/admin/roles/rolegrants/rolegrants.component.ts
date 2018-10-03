import { Component, OnInit } from '@angular/core';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { RoleService } from '../../services/roles.service';
import { Role } from '../../models/role.model';
import { SearchCriteria } from '../../models/searchcriteria.model';
import { Grant } from '../../models/grant.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-rolegrants',
  templateUrl: './rolegrants.component.html',
  styleUrls: ['./rolegrants.component.css']
})
export class RolegrantsComponent implements OnInit {
  private draggedUnassignGrant: Grant;
  private draggedAssignGrant: Grant;

  constructor(
    public roleUtServ: RoleutilityService,
    private roleServ: RoleService
  ) { }

  ngOnInit() {
  }

  unassignGrantDragStart(eve, grant: Grant) {
    this.draggedUnassignGrant = grant;
  }
  unassignGrantDragEnd(eve) {
    // this.draggedGrant = null
  } 
  unassignGrantDrop(eve) {
    if(this.draggedUnassignGrant){
      this.roleUtServ.roleDataLoading =true;
      const self = this;

      //Save assigned grant with roleid
      this.roleServ.saveAssignedGrant(this.draggedUnassignGrant.id, this.roleUtServ.selectedRole.id).subscribe(
        res => {  
          //Remove grant from unassigned array
          // _.remove(self.roleUtServ.allGrants, function(grant){
          //     return grant.id === self.draggedUnassignGrant.id;
          // });
          self.roleUtServ.allGrants.forEach(agrant =>{
            if(agrant.id === self.draggedUnassignGrant.id){
              agrant.roleId = self.draggedUnassignGrant.roleId;
            }
          });

          //Add grant into assigned array
          self.draggedUnassignGrant.roleId = self.roleUtServ.selectedRole.id;
          
          self.roleUtServ.selectedRole.grants = [...self.roleUtServ.selectedRole.grants, self.draggedUnassignGrant];
          self.roleUtServ.roleDataLoading =false;
          self.draggedUnassignGrant = null
        },
        error => { 
          console.log(error);
          self.roleUtServ.roleDataLoading =false;
        }
      );
    }
  }

  assignGrantDragStart(eve, grant: Grant) {
    this.draggedAssignGrant = grant;
  }
  assignGrantDragEnd(eve) {
    // this.draggedGrant = null
  } 
  assignGrantDrop(eve) {
    if(this.draggedAssignGrant){
      this.roleUtServ.roleDataLoading =true;
      const self = this;

      //Release assigned grant
      this.roleServ.releaseAssignedGrant(this.draggedAssignGrant.id).subscribe(
        res => {  
          //Remove grant from assigned array
          _.remove(self.roleUtServ.selectedRole.grants, function(grant){
              return grant.id === self.draggedAssignGrant.id;
          });

          //Delete role id of grant
          delete self.draggedAssignGrant.roleId;
          
          // self.roleUtServ.allGrants = [...self.roleUtServ.allGrants];
          self.roleUtServ.allGrants.forEach(ugrant =>{
              if(ugrant.id === self.draggedAssignGrant.id){
                delete ugrant.roleId;
              }
          });

          self.roleUtServ.roleDataLoading =false;
          self.draggedAssignGrant = null
        },
        error => { 
          console.log(error);
          self.roleUtServ.roleDataLoading =false;
        }
      );
    }
  }
}
