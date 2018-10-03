import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordtypeListComponent } from './recordtype-list.component';

describe('RecordtypeListComponent', () => {
  let component: RecordtypeListComponent;
  let fixture: ComponentFixture<RecordtypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordtypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
