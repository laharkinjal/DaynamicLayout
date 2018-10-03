import { Component, OnInit } from '@angular/core';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { RoleService } from './../../services/roles.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-rolesform',
  templateUrl: './rolesform.component.html',
  styleUrls: ['./rolesform.component.css']
})
export class RolesformComponent implements OnInit {
  role: Role;

  constructor(
    public roleUtServ: RoleutilityService,
    public roleServ: RoleService,
    private msgServ: MessageService
  ) { }

  ngOnInit() {
    this.role = this.roleUtServ.deepcopy(this.roleUtServ.selectedRole);
  }

  createRole() {
    this.role.updateDate= new Date().toDateString();

    if(this.role.id){
      this.roleServ.updateRole(this.role.id, this.role).subscribe(
        res =>{
          this.roleUtServ.showCreateNew = false;
          this.msgServ.add({
            severity: "success",
            summary: "Role",
            detail: "Role updated !"
          });
        }, 
        err =>{console.log(err);}
      );

      this.roleUtServ.selectedRole.name = this.role.name;
      this.roleUtServ.selectedRole.description = this.role.description;
      this.roleUtServ.selectedRole.active = this.role.active;
    }else{
      // delete this.role.id;
      return this.roleServ.createRole(this.role).subscribe(
        res =>{
          this.roleUtServ.showCreateNew = false;
          this.role.id = res['id'];
          
          this.roleUtServ.allRoles.push(this.role);
          this.msgServ.add({
            severity: "success",
            summary: "Role",
            detail: "Role created !"
          });
        }, 
        err =>{console.log(err);}
      );
    }
  }
}
