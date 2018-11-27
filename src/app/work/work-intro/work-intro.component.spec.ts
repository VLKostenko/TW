import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkIntroComponent } from './work-intro.component';

describe('WorkIntroComponent', () => {
  let component: WorkIntroComponent;
  let fixture: ComponentFixture<WorkIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
