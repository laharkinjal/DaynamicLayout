import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {Breadcrumbservice} from '../../../services/utility/bread-crumb.service';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';

@Component({
  selector: 'app-admin-object-list',
  templateUrl: './admin-object-list.component.html',
  styleUrls: ['./admin-object-list.component.css']
})
export class AdminObjectListComponent implements OnInit {

  isStandard = true;
  showSidebar = false;
  public cols = [
    { field: 'name', header: 'Name' }
  ];

  constructor(
    public messageService: MessageService,
    private breadCrumb: Breadcrumbservice,
    private objectUtService: ObjectsUtilityService
  ) { }

  ngOnInit() {
  }

  selectObject(object) {
    this.objectUtService.selectedObject = object;
    this.breadCrumb.breadCrumbTreeDataModel = [{ label: object.objectName }];
    this.objectUtService.getFields(this.objectUtService.selectedObject.id);
    this.objectUtService.showDetails = true;
  }

  onAddObject() {
    this.objectUtService.editMode = false;
    this.objectUtService.resetObjectTemplate();
    this.objectUtService.showOnFormTab = 'Objects';
    this.objectUtService.editMode = false;
    this.objectUtService.showFormTab = true;
  }

  deleteObject(id) {
    if (this.objectUtService.selectedObject) {
      if (this.objectUtService.selectedObject.id === id) {
        this.objectUtService.showDetails = false;
        this.objectUtService.selectedObject = null;
      }
    }
    this.objectUtService.deleteObject(id);
  }

}
