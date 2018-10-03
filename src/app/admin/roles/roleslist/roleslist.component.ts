import { RoleService } from './../../services/roles.service';
import { Role } from './../../models/role.model';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { Component, OnInit } from '@angular/core';
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';//BN
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';
import * as _ from 'lodash';

@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.css']
})
export class RoleslistComponent implements OnInit {

  public active;
  public system;
  public cols = [
    // {field:"id", header:"Id"},
    { field: "name", header: "Name" },
    { field: "description", header: "Description" },
    { field: "createdBy", header: "Created by" },
    { field: "updateDate", header: "Last Updated" },
    { field: "active", header: "Status" }
  ];

  constructor(
    public roleUtServ: RoleutilityService,
    public roleServ: RoleService,
    private breadCrumb: Breadcrumbservice,
    public objectUtService: ObjectsUtilityService,
    private confirmationService: ConfirmationService,
    private msgServ: MessageService,
  ) { }

  ngOnInit() {

  }

  selectRole(role: Role) {
    this.roleUtServ.roleDataLoading = true;
    this.roleUtServ.showDetails = true;
    this.roleUtServ.showCreateNew = false;
    this.roleUtServ.rootRole = role;
    
    this.roleUtServ.resetRoleView();
  }

  goToCreateNew() {
    this.roleUtServ.showDetails = false;
    this.roleUtServ.selectedRole = null;
    this.roleUtServ.selectEmptyRole();
    this.roleUtServ.showCreateNew = true;
  }

  editRole(role: Role){
    this.roleUtServ.showDetails = false;
    this.roleUtServ.selectedRole = role;
    this.roleUtServ.showCreateNew = true;
  }
  public deleteRole(roleId:number){
      this.confirmationService.confirm({
          message: 'Do you want to delete this role?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              // this.roleUtServ.deleteRole(roleArray[1].roleId);
            return this.roleServ.deleteRole(roleId).subscribe(res =>{
                this.msgServ.add({
                  severity: "success",
                  summary: "Role",
                  detail: "Role deleted !"
                });
                _.remove(this.roleUtServ.allRoles, function(role){
                  return role.id === roleId;
                });

                this.roleUtServ.selectedRole = null;
                this.roleUtServ.showDetails = false;
            },
            error => {
              console.log(error);
            });
          }
      });
    }
  

  changeActiveStatus(roleId, value) {
    // console.log(this.roleUtServ.allRoles);
    // console.log("clicked");
    // switch (value) {
    //   case false:
    //     this.roleUtServ.disableRole(roleId);
    //     break;
    //   case true:
    //     this.roleUtServ.enableRole(roleId);
    //     break;
    // }
  }

  // filterOnChange() {
  //   let searchCriteria = [];
  //   if ((this.active != undefined) && (this.active[0] == 'true')) {
  //     searchCriteria.push(new SearchCriteria("active", "matching", this.active[0]));
  //   }
  //   if ((this.system != undefined) && (this.system[0] == 'true')) {
  //     searchCriteria.push(new SearchCriteria("root", "matching", this.system[0]));
  //   }

  //   this.roleServ.searchRoles({ "searchCriteria": searchCriteria }).subscribe(
  //     (roles: Role[]) => {
  //       this.roleUtServ.allRoles = roles;
  //     },
  //     error => {

  //     }
  //   );
  // }

}
