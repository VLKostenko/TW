import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActifinderComponent } from './actifinder.component';

describe('ActifinderComponent', () => {
  let component: ActifinderComponent;
  let fixture: ComponentFixture<ActifinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActifinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActifinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
