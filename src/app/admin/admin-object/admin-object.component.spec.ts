import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectComponent } from './admin-object.component';

describe('AdminObjectComponent', () => {
  let component: AdminObjectComponent;
  let fixture: ComponentFixture<AdminObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
