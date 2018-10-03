import { Component, OnInit } from '@angular/core';
import { BuUtilityService } from './../../../services/utility/bu-utility.service';

@Component({
  selector: 'businessunit-o-grant',
  templateUrl: './businessunit-o-grant.component.html',
  styleUrls: ['./businessunit-o-grant.component.css']
})
export class BusinessunitOGrantComponent implements OnInit {
  public cols = [
    // { field: "name", header: "Objects" },
    { field: "create", header: "Create" }, 
    { field: "read", header: "Read" },
    { field: "update", header: "Update" },
    { field: "delete", header: "Delete" },
  ];

  public objectColorCodeClass = {
    'none': { class: 'text-danger fa fa-circle-o', name: 'None' },
    'user': { class: 'text-warning fa fa-circle-o', name: 'User' },
    'bu': { class: 'text-success fa fa-circle-o', name: 'Business Unit' },
    'buhierarchy': { class: 'text-success fa fa-circle', name: 'Business Unit Hierarchy' },
    'corporate': { class: 'text-warning fa fa-circle', name: 'Corporate' }
  };
  constructor(private buUtilityServ: BuUtilityService) { }

  ngOnInit() {
  }

}
