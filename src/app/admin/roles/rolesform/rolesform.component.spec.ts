import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesformComponent } from './rolesform.component';

describe('RolesformComponent', () => {
  let component: RolesformComponent;
  let fixture: ComponentFixture<RolesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
