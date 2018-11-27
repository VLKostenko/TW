import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplauchComponent } from './uplauch.component';

describe('UplauchComponent', () => {
  let component: UplauchComponent;
  let fixture: ComponentFixture<UplauchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplauchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplauchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
