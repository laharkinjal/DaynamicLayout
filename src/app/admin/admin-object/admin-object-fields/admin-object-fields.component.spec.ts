import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectFieldsComponent } from './admin-object-fields.component';

describe('AdminObjectFieldsComponent', () => {
  let component: AdminObjectFieldsComponent;
  let fixture: ComponentFixture<AdminObjectFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
