import { SearchCriteria } from './../../models/searchcriteria.model';
import { BuUtilityService } from './../../services/utility/bu-utility.service';
import { BusinessUnitService } from './../../services/businessunit.service';
import { BusinessUnit } from './../../models/businessunit.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
// BN
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';

@Component({
  selector: 'app-businessunitlist',
  templateUrl: './businessunitlist.component.html',
  styleUrls: ['./businessunitlist.component.css']
})
export class BusinessunitlistComponent implements OnInit {
  public filters = [
    { label: 'Select filter', value: '' },
    { label: 'Filter by Active', value: 'active' },
    { label: 'Filter by Root', value: 'root' }
  ];
  selectedFilter: string;

  public cols = [
    // {field:"id", header:"Id"},
    { field: "name", header: "BU Name" },
    { field: "description", header: "Description" },
    // {field:"information", header:"Information"}
  ];

  constructor(
    public buServ: BusinessUnitService,
    public buUtilityServ: BuUtilityService,
    public userServ: UsersService,
    // BN
    private breadCrumb: Breadcrumbservice,
  ) { }

  ngOnInit() {

  }

  selectBu(bu: BusinessUnit) {
    this.buUtilityServ.showDetails = true;
    this.buUtilityServ.showCreateNew = false;
    this.buUtilityServ.selectedBu = bu;

    this.buServ.getAllUsersByBusinessUnitId(bu.id).subscribe(data => {
      this.userServ.users = data;
    });
    this.buUtilityServ.getImmediateChildren(bu.id);

    // BN
    this.buUtilityServ.getAssignedRoles(bu.id);

    this.breadCrumb.breadCrumbTreeDataModel = [{ label: bu.name }];

  }

  goToCreateNew() {
    this.buUtilityServ.showDetails = false;
    this.buUtilityServ.selectedBu = null;
    this.buUtilityServ.resetBuTemplate();
    this.buUtilityServ.showCreateNew = true;
  }

  deleteBu(buId) {
    this.buUtilityServ.deleteBuById(buId);
  }

  editBu(bu) {
    this.buUtilityServ.selectedBu = bu;
    this.buUtilityServ.buTemplate.name = bu.name;
    this.buUtilityServ.buTemplate.description = bu.description;
    this.buUtilityServ.buTemplate.parentId = bu.parentId;
    this.buUtilityServ.showCreateNew = true;
    this.buUtilityServ.showDetails = false;
  }

  changeActiveStatus(buId, value) {
    console.log("clicked");
    switch (value) {
      case false:
        this.buUtilityServ.disableBu(buId);
        break;
      case true:
        this.buUtilityServ.enableBu(buId);
        break;
    }
  }

  filterOnChange() {
    const searchCriteria = [];

    // BN search fields
    if (this.selectedFilter != undefined && this.selectedFilter != '') {
      searchCriteria.push(new SearchCriteria(this.selectedFilter, "matching", 'true'));
    }

    this.buServ.searchBusinessUnit({ "searchCriteria": searchCriteria }).subscribe(
      (businessunits: BusinessUnit[]) => {
        this.buUtilityServ.allBusinessUnits = businessunits;
      },
      error => {

      }
    );
  }
}
