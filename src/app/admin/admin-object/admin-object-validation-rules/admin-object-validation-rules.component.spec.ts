import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectValidaitonRulesComponent } from './admin-object-validaiton-rules.component';

describe('AdminObjectValidaitonRulesComponent', () => {
  let component: AdminObjectValidaitonRulesComponent;
  let fixture: ComponentFixture<AdminObjectValidaitonRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjectValidaitonRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjectValidaitonRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
