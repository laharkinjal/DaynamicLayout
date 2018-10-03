import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleviewComponent } from './roleview.component';

describe('RoleviewComponent', () => {
  let component: RoleviewComponent;
  let fixture: ComponentFixture<RoleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
