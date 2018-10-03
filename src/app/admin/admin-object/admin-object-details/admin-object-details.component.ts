import { Component, OnInit } from '@angular/core';
import {Breadcrumbservice} from '../../../services/utility/bread-crumb.service';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';

@Component({
  selector: 'app-admin-object-details',
  templateUrl: './admin-object-details.component.html',
  styleUrls: ['./admin-object-details.component.css']
})
export class AdminObjectDetailsComponent implements OnInit {

  constructor(public objectUtServ: ObjectsUtilityService,
              private breadCrumb: Breadcrumbservice
  ) { }

  ngOnInit() {
  }

}
