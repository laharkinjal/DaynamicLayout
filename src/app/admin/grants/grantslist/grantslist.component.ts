import { Component, OnInit, Input } from '@angular/core';
import { Grant } from '../../models/grant.model';

@Component({
  selector: 'app-grantslist',
  templateUrl: './grantslist.component.html',
  styleUrls: ['./grantslist.component.css']
})
export class GrantslistComponent implements OnInit {

  @Input("grantsList") grantsList:Grant[];

  public cols = [
    {field:"name", header:"Grant Name"},
    {field:"code", header:"Grant Code"},
    {field:"description", header:"Grant Description"},
    {field:"active", header:"Active"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
