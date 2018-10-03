import { BuUtilityService } from './../../services/utility/bu-utility.service';
import { BusinessUnitService } from './../../services/businessunit.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { TreeNode } from 'primeng/api';
//BN
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';

@Component({
  selector: 'app-businessunitview',
  templateUrl: './businessunitview.component.html',
  styleUrls: ['./businessunitview.component.css']
})
export class BusinessunitviewComponent implements OnInit {
  loading = false;
  public businessUnitTree: TreeNode[] = [];

  constructor(
    public buServ: BusinessUnitService,
    public buUtilityServ: BuUtilityService,
    //BN Breadcrumb
    private breadCrumb:Breadcrumbservice
  ) { }

  ngOnInit() {

  }

  onNodeExpand(event) {
    const node = event.node;
    this.buUtilityServ.getChildNodes(node);

    // BN Breadcrumb for tree
    setTimeout(() => {
      this.breadCrumb.breadCrumbTreeDataModel = [];
      this.breadCrumb.breadCrumbTreeDataModel.push({label: this.buUtilityServ.selectedBu.name});
      var parentNode = node;
      do {
        this.breadCrumb.breadCrumbTreeDataModel.splice(1,0,{label: parentNode.data.name});
        parentNode = parentNode.parent;
      }
      while (parentNode !=null);
    });
  }

  // prepareTreeNode(buTreeData) {
  //   buTreeData.forEach(element => {
  //     this.businessUnitTree.push({
  //       data: {
  //         "id": element.id,
  //         "name": element.name,
  //         "description": element.description,
  //         "active": element.active
  //       },
  //       leaf: false,
  //       children: []
  //     });
  //   });

  //   this.businessUnitTree = [...this.businessUnitTree];
  //   this.loading = false;
  // }
}
