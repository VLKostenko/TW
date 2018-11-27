import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitymaxComponent } from './citymax.component';

describe('CitymaxComponent', () => {
  let component: CitymaxComponent;
  let fixture: ComponentFixture<CitymaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitymaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitymaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
