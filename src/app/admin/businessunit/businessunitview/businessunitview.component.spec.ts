import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsgroupviewComponent } from './grantsgroupview.component';

describe('GrantsgroupviewComponent', () => {
  let component: GrantsgroupviewComponent;
  let fixture: ComponentFixture<GrantsgroupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsgroupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsgroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
