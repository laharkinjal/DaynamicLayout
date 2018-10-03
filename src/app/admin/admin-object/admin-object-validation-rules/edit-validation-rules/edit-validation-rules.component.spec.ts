import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValidationRulesComponent } from './edit-validation-rules.component';

describe('EditValidationRulesComponent', () => {
  let component: EditValidationRulesComponent;
  let fixture: ComponentFixture<EditValidationRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditValidationRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditValidationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
