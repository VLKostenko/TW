import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayyexComponent } from './payyex.component';

describe('PayyexComponent', () => {
  let component: PayyexComponent;
  let fixture: ComponentFixture<PayyexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayyexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayyexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
