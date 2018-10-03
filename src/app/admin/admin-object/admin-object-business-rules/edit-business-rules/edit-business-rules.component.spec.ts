import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessRulesComponent } from './edit-business-rules.component';

describe('EditBusinessRulesComponent', () => {
  let component: EditBusinessRulesComponent;
  let fixture: ComponentFixture<EditBusinessRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBusinessRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
