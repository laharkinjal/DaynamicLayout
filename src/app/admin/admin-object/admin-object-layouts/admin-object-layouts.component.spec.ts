import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectLayoutsComponent } from './admin-object-layouts.component';

describe('AdminObjectLayoutsComponent', () => {
  let component: AdminObjectLayoutsComponent;
  let fixture: ComponentFixture<AdminObjectLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
