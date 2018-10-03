import { BuUtilityService } from './../services/utility/bu-utility.service';
import { BusinessUnit } from './../models/businessunit.model';
import { BusinessUnitService } from './../services/businessunit.service';
import { SearchCriteria } from './../models/searchcriteria.model';
import { Breadcrumbservice } from './../../services/utility/bread-crumb.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessunit',
  templateUrl: './businessunit.component.html',
  styleUrls: ['./businessunit.component.css']
})
export class BusinessunitComponent implements OnInit {

  public form: FormGroup;
  public buNameControl = new FormControl("");
  public descriptionControl = new FormControl("");
  public buSearchLoading = false;
  public addNewMenuItems;

  constructor(
    public breadCrumbServ: Breadcrumbservice,
    public buServ: BusinessUnitService,
    public buUtilityServ: BuUtilityService
  ) { }

  ngOnInit() {
    this.breadCrumbServ.breadCrumbDataModel = [
      { label: "Admin" },
      { label: "Business Units" }
    ];

    this.addNewMenuItems = [
      { label: 'New', icon: 'fa-plus' }
    ];

    this.form = new FormGroup({
      "buName": this.buNameControl,
      "description": this.descriptionControl
    });
  }

  doSearch() {
    this.buSearchLoading = true;
    let searchCriteria = [];
    if (this.buNameControl.value) {
      searchCriteria.push(new SearchCriteria("name", "matching", this.buNameControl.value));
    }
    if (this.descriptionControl.value) {
      searchCriteria.push(new SearchCriteria("description", "matching", this.descriptionControl.value));
    }

    this.buServ.searchBusinessUnit({ "searchCriteria": searchCriteria }).subscribe(
      (businessunits: BusinessUnit[]) => {
        this.buUtilityServ.allBusinessUnits = businessunits;
        this.buSearchLoading = false;
      },
      error => {
        this.buSearchLoading = false;
      }
    );
  }

}
