import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptobasketsComponent } from './cryptobaskets.component';

describe('CryptobasketsComponent', () => {
  let component: CryptobasketsComponent;
  let fixture: ComponentFixture<CryptobasketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptobasketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptobasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
