import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessunitOGrantComponent } from './businessunit-o-grant.component';

describe('BusinessunitOGrantComponent', () => {
  let component: BusinessunitOGrantComponent;
  let fixture: ComponentFixture<BusinessunitOGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessunitOGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessunitOGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
