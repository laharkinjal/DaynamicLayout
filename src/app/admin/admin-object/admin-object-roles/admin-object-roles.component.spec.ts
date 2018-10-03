import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectRolesComponent } from './admin-object-roles.component';

describe('AdminObjectRolesComponent', () => {
  let component: AdminObjectRolesComponent;
  let fixture: ComponentFixture<AdminObjectRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
