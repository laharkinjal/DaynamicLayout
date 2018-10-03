import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFGrantComponent } from './role-f-grant.component';

describe('RoleFGrantComponent', () => {
  let component: RoleFGrantComponent;
  let fixture: ComponentFixture<RoleFGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleFGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleFGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
