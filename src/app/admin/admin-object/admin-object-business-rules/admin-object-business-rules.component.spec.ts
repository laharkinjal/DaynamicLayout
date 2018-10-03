import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectBusinessRulesComponent } from './admin-object-business-rules.component';

describe('AdminObjectBusinessRulesComponent', () => {
  let component: AdminObjectBusinessRulesComponent;
  let fixture: ComponentFixture<AdminObjectBusinessRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectBusinessRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectBusinessRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
