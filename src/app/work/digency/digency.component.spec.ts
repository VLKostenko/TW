import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigencyComponent } from './digency.component';

describe('DigencyComponent', () => {
  let component: DigencyComponent;
  let fixture: ComponentFixture<DigencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
