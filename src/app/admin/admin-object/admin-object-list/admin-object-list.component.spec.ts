import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectListComponent } from './admin-object-list.component';

describe('AdminObjectListComponent', () => {
  let component: AdminObjectListComponent;
  let fixture: ComponentFixture<AdminObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
