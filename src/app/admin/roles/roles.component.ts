import { Role } from './../models/role.model';
import { SearchCriteria } from './../models/searchcriteria.model';
import { RoleutilityService } from './../services/utility/roleutility.service';
import { RoleService } from './../services/roles.service';
import { Breadcrumbservice } from './../../services/utility/bread-crumb.service';
import { ObjectsUtilityService } from './../services/utility/objects-utility.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public form: FormGroup;
  public roleNameControl = new FormControl("");
  public descriptionControl = new FormControl("");
  public roleSearchLoading = false;
  public addNewMenuItems;

  constructor(
    public breadCrumbServ: Breadcrumbservice,
    private objectUtService: ObjectsUtilityService,
    public roleUtServ: RoleutilityService,
    public roleServ: RoleService
  ) { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.breadCrumbServ.breadCrumbDataModel = [
        { label: "Admin" },
        { label: "Roles" }
      ];  
    });
    
    this.addNewMenuItems = [
      { label: 'New', icon: 'fa-plus' }
    ];

    this.form = new FormGroup({
      "roleName": this.roleNameControl,
      "description": this.descriptionControl
    });
  }
  selectBreadcrumbEle(index:number, role: Role){
    if(role){
      if(index+1 < this.breadCrumbServ.breadCrumbTreeDataModel.length){
        this.breadCrumbServ.breadCrumbTreeDataModel.splice(index+1);
      }
      this.roleUtServ.selectedRole = role;
      this.roleUtServ.fetchRoleData();
    }
  }
  // doSearch() {
  //   this.roleSearchLoading = true;
  //   let searchCriteria = [];
  //   if (this.roleNameControl.value) {
  //     searchCriteria.push(new SearchCriteria("name", "matching", this.roleNameControl.value));
  //   }
  //   if (this.descriptionControl.value) {
  //     searchCriteria.push(new SearchCriteria("description", "matching", this.descriptionControl.value));
  //   }

  //   this.roleServ.searchRoles({ "searchCriteria": searchCriteria }).subscribe(
  //     (roles: Role[]) => {
  //       this.roleUtServ.allRoles = roles;
  //       this.roleSearchLoading = false;
  //     },
  //     error => {
  //       this.roleSearchLoading = false;
  //     }
  //   );
  // }

}
