import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantslistComponent } from './grantslist.component';

describe('GrantslistComponent', () => {
  let component: GrantslistComponent;
  let fixture: ComponentFixture<GrantslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
