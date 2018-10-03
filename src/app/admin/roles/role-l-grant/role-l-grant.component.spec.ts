import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleLGrantComponent } from './role-l-grant.component';

describe('RoleLGrantComponent', () => {
  let component: RoleLGrantComponent;
  let fixture: ComponentFixture<RoleLGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleLGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleLGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
