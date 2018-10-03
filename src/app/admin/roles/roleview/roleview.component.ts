import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Breadcrumbservice } from '../../../services/utility/bread-crumb.service';
import { RoleutilityService } from './../../services/utility/roleutility.service';
import { RoleService } from './../../services/roles.service';
import { ObjectsUtilityService } from './../../services/utility/objects-utility.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';
import * as _ from 'lodash';

@Component({
  selector: 'app-roleview',
  templateUrl: './roleview.component.html',
  styleUrls: ['./roleview.component.css']
})
export class RoleviewComponent implements OnInit {
  loading = false;
  unassignedRoles = [];
  
  public roleTree: TreeNode[] = [];
  isShowAddLayer: boolean = false;
  
  constructor(
    public roleUtServ: RoleutilityService,
    public roleServ: RoleService,
    private breadCrumb:Breadcrumbservice,
    public objectUtService: ObjectsUtilityService,
    private confirmationService: ConfirmationService,
    private msgServ: MessageService,
  ) { }

  ngOnInit() {
  }

  onNodeExpand(event) {
    const node = event.node;
    this.roleUtServ.getChildNodes(node);
    this.roleUtServ.selectedRole = node.data;

    this.roleUtServ.fetchRoleData();

    this.generateBreadCrumb(node);
  }

  private generateBreadCrumb(node?: TreeNode){
// BN Breadcrumb for tree
    setTimeout(() => {
      //Remove all bread crum item from array except first item
      this.breadCrumb.breadCrumbTreeDataModel.splice(1);
      if(node){
        var parentNode = node;
        do {
          this.breadCrumb.breadCrumbTreeDataModel.splice(1, 0, 
            // {role: parentNode.data, label: parentNode.data.name}
            this.breadCrumb.generateBreadcrumbItem(parentNode.data)
          );
          parentNode = parentNode.parent;
        }
        while (parentNode !=null);
      }
    });
  }

  showAddOverlay(){
    this.unassignedRoles=[];
    this.isShowAddLayer = !this.isShowAddLayer;
    
    if(this.isShowAddLayer)
    {
      const self = this;
      _.forEach(this.roleUtServ.allRoles, function(role){
        if(role.root==false && role.parentId==null && role.id != self.roleUtServ.selectedRole.id){
          self.unassignedRoles.push({value: role, label: role.name});
        }
      });
    }
  }
  addChildren(children){
    if (children != undefined) {
      let selectedRoleId = this.roleUtServ.selectedRole.id;
      this.roleUtServ.addChildren(children.id, selectedRoleId);
      
      //Set parent id of selected role
      children.parentId = selectedRoleId
      this.isShowAddLayer = false;
      this.roleUtServ.getImmediateChildren(this.roleUtServ.rootRole.id);
    }
  }
  
  public deleteChildren(){
    let roleArray = this.breadCrumb.breadCrumbTreeDataModel;
    if(roleArray.length >1){
      let deleteChildId = roleArray[1].elevalue.id;
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
            return this.roleServ.deleteChildren(deleteChildId).subscribe(res =>{
              roleArray[1].elevalue.parentId=null;
                this.msgServ.add({
                  severity: "success",
                  summary: "Role",
                  detail: "Role deleted !"
                });
            
              this.roleUtServ.resetRoleView();
            });
          }
      });
    }
  }
  // prepareTreeNode(buTreeData) {
  //   console.log(buTreeData);
  //   buTreeData.forEach(element => {
  //     this.roleTree.push({
  //       data: {
  //         "id": element.id,
  //         "name": element.name,
  //         "description": element.description,
  //         "updateDate":element.updateDate,
  //         "active": element.active
  //       },
  //       leaf: false,
  //       children: []
  //     });
  //   });

  //   this.roleTree = [...this.roleTree];
  //   this.loading = false;
  // }
}
