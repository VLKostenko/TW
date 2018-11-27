import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptopComponent } from './apptop.component';

describe('ApptopComponent', () => {
  let component: ApptopComponent;
  let fixture: ComponentFixture<ApptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
