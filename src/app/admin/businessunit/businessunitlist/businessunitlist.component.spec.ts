import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsgrouplistComponent } from './grantsgrouplist.component';

describe('GrantsgrouplistComponent', () => {
  let component: GrantsgrouplistComponent;
  let fixture: ComponentFixture<GrantsgrouplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsgrouplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
