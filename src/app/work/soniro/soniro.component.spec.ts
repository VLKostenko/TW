import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoniroComponent } from './soniro.component';

describe('SoniroComponent', () => {
  let component: SoniroComponent;
  let fixture: ComponentFixture<SoniroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoniroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoniroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
