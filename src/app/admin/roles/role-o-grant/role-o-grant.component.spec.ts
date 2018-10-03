import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleOGrantComponent } from './role-o-grant.component';

describe('RoleOGrantComponent', () => {
  let component: RoleOGrantComponent;
  let fixture: ComponentFixture<RoleOGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleOGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleOGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
