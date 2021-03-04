import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualVideoComponent } from './individual-video.component';

describe('IndividualVideoComponent', () => {
  let component: IndividualVideoComponent;
  let fixture: ComponentFixture<IndividualVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
