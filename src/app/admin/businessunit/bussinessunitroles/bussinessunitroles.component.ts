import { Component, OnInit, Input } from '@angular/core';
import { SearchCriteria } from './../../models/searchcriteria.model';
import { RoleService } from '../../services/roles.service';
import { BuUtilityService } from './../../services/utility/bu-utility.service';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { BusinessUnitService } from './../../services/businessunit.service';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-bussinessunitroles',
  templateUrl: './bussinessunitroles.component.html',
  styleUrls: ['./bussinessunitroles.component.css']
})
export class BussinessunitrolesComponent implements OnInit {
  selectedFilter: string = String('');
  private filters: any = [];
  public role: Role;
  private headerText: String = '';

  constructor(
    private buServ: BusinessUnitService,
    private buUtilityServ: BuUtilityService,
    private roleUtiServ: RoleutilityService,
    private roleServ: RoleService
  ) { }

  ngOnInit() {
    this.filters = [
      // { label: 'Actions', value: '' },
      { label: 'View Roles', value: '' },
      { label: 'View Net Roles', value: 'net-roles' },
      { label: 'View Net Grants', value: 'net-grants' },
      { label: 'View Net O Grants', value: 'net-o-grants' },
      { label: 'View Net L Grants', value: 'net-l-grants' },
      { label: 'View Net F Grants', value: 'net-f-grants' }
    ];
  }

  filterGlobal(value, type) {
    if (!value) { return; }

    const searchCriteria = [];
    searchCriteria.push(new SearchCriteria("name", type, value));

    this.roleServ.searchRoles({ "searchCriteria": searchCriteria }).subscribe(
      (roles: Role[]) => {
        this.roleUtiServ.allRoles = roles;
      }, error => {
        console.log(error);
      }
    );
  }
  filterOnChange() {
    switch (this.selectedFilter) {
      case "":
        this.roleUtiServ.getAll();
        this.buUtilityServ.getAssignedRoles(this.buUtilityServ.selectedBu.id);
        break;

      case "net-roles":
        this.headerText = 'Net Roles';
        this.buUtilityServ.getNetRoles(this.buUtilityServ.selectedBu.id);
        break;

      case "net-grants":
        this.headerText = 'Net Grants';
        this.buUtilityServ.getNetGrants(this.buUtilityServ.selectedBu.id);
        break;

      case "net-o-grants":
        this.headerText = 'Net O Grants';
        this.buUtilityServ.getNetOGrants(this.buUtilityServ.selectedBu.id);
        this.buUtilityServ.getNetObjects(this.buUtilityServ.selectedBu.id);
        break;

      case "net-l-grants":
        this.headerText = 'Net L Grants';
        this.buUtilityServ.getNetLGrants(this.buUtilityServ.selectedBu.id);
        this.buUtilityServ.getNetObjects(this.buUtilityServ.selectedBu.id);
        break;

      case "net-f-grants":
        this.headerText = 'Net F Grants';
        this.buUtilityServ.getNetFGrants(this.buUtilityServ.selectedBu.id);
        break;

      default:
        break;
    }
  }
  dragStart(eve, selectedRole) {
    this.role = selectedRole;
  }
  dragEnd(eve) {
    // console.log('dragend', eve);
  }
  drop(eve) {
    this.buServ.saveDropedRole(this.buUtilityServ.selectedBu.id, Number(this.role.createdBy), this.role.id)
      .subscribe((response: any) => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}
