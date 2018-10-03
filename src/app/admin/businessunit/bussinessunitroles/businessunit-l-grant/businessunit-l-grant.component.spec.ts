import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessunitLGrantComponent } from './businessunit-l-grant.component';

describe('BusinessunitLGrantComponent', () => {
  let component: BusinessunitLGrantComponent;
  let fixture: ComponentFixture<BusinessunitLGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessunitLGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessunitLGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
