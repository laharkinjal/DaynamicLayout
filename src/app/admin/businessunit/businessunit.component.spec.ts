import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsgroupComponent } from './grantsgroup.component';

describe('GrantsgroupComponent', () => {
  let component: GrantsgroupComponent;
  let fixture: ComponentFixture<GrantsgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
