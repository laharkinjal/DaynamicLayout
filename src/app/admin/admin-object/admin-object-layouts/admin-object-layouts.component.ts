import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';
import { Layout } from '../../models/layout.model';
import { ObjectsService } from '../../services/objects.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-object-layouts',
  templateUrl: './admin-object-layouts.component.html',
  styleUrls: ['./admin-object-layouts.component.css']
})
export class AdminObjectLayoutsComponent implements OnInit {

  constructor(
    private objectUtService : ObjectsUtilityService,
    private objectService: ObjectsService,
    private confirmationService: ConfirmationService,
    private msgServ: MessageService
  ) { }

  ngOnInit() {
  }

  private editLayout(layout: Layout){
    console.log('Edit: ', layout);
  }

  public deleteLayout(layoutId: number){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        return this.objectService.deleteLayout(layoutId).subscribe(res =>{
            this.msgServ.add({
              severity: "success",
              summary: "Role",
              detail: "Role deleted !"
            });
        },
        err =>{
          console.log(err);
        }
        );
      }
    });
  }
}
