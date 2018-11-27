import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelonComponent } from './cancelon.component';

describe('CancelonComponent', () => {
  let component: CancelonComponent;
  let fixture: ComponentFixture<CancelonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
