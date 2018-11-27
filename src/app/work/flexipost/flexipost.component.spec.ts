import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexipostComponent } from './flexipost.component';

describe('FlexipostComponent', () => {
  let component: FlexipostComponent;
  let fixture: ComponentFixture<FlexipostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexipostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexipostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
