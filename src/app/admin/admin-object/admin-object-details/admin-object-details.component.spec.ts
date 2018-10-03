import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectDetailsComponent } from './admin-object-details.component';

describe('AdminObjectDetailsComponent', () => {
  let component: AdminObjectDetailsComponent;
  let fixture: ComponentFixture<AdminObjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
