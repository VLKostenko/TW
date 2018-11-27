import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IclubComponent } from './iclub.component';

describe('IclubComponent', () => {
  let component: IclubComponent;
  let fixture: ComponentFixture<IclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
