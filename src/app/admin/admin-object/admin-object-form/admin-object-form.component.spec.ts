import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectFormComponent } from './admin-object-form.component';

describe('AdminObjectFormComponent', () => {
  let component: AdminObjectFormComponent;
  let fixture: ComponentFixture<AdminObjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
