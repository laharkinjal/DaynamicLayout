import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsgroupformComponent } from './businessunitform.component';

describe('GrantsgroupformComponent', () => {
  let component: GrantsgroupformComponent;
  let fixture: ComponentFixture<GrantsgroupformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsgroupformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsgroupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
