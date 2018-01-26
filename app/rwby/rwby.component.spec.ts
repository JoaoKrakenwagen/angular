import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwbyComponent } from './rwby.component';

describe('RwbyComponent', () => {
  let component: RwbyComponent;
  let fixture: ComponentFixture<RwbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
