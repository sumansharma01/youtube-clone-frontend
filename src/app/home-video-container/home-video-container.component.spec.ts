import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideoContainerComponent } from './home-video-container.component';

describe('HomeVideoContainerComponent', () => {
  let component: HomeVideoContainerComponent;
  let fixture: ComponentFixture<HomeVideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVideoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
