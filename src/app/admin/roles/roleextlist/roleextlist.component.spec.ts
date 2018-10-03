import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleextlistComponent } from './roleextlist.component';

describe('RoleextlistComponent', () => {
  let component: RoleextlistComponent;
  let fixture: ComponentFixture<RoleextlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleextlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleextlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
