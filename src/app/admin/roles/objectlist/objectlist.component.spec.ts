import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectlistComponent } from './objectlist.component';

describe('ObjectlistComponent', () => {
  let component: ObjectlistComponent;
  let fixture: ComponentFixture<ObjectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
