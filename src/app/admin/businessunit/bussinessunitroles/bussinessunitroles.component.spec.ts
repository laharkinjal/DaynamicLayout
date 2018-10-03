import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessunitrolesComponent } from './bussinessunitroles.component';

describe('BussinessunitrolesComponent', () => {
  let component: BussinessunitrolesComponent;
  let fixture: ComponentFixture<BussinessunitrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessunitrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessunitrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
