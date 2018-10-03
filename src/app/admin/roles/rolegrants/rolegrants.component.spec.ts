import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolegrantsComponent } from './rolegrants.component';

describe('RolegrantsComponent', () => {
  let component: RolegrantsComponent;
  let fixture: ComponentFixture<RolegrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolegrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolegrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
