import { Component, OnInit } from '@angular/core';
import { ObjectsUtilityService } from '../../services/utility/objects-utility.service';
import { RecordType } from '../../models/recordtype.model';

@Component({
  selector: 'app-recordtype-list',
  templateUrl: './recordtype-list.component.html',
  styleUrls: ['./recordtype-list.component.css']
})
export class RecordtypeListComponent implements OnInit {

  constructor(
    private objectUtService: ObjectsUtilityService
  ) { }

  ngOnInit() {
  }

  selectRecordType(record: RecordType){
    this.objectUtService.roleObjectDataLoading = true;
    this.objectUtService.selectedRecordType= record;
    this.objectUtService.getLayouts(record.id);
  }

}
