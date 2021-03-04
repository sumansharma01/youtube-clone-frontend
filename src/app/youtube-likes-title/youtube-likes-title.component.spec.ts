import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLikesTitleComponent } from './youtube-likes-title.component';

describe('YoutubeLikesTitleComponent', () => {
  let component: YoutubeLikesTitleComponent;
  let fixture: ComponentFixture<YoutubeLikesTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLikesTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLikesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
