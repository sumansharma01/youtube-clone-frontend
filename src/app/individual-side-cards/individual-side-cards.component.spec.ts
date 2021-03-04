import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSideCardsComponent } from './individual-side-cards.component';

describe('IndividualSideCardsComponent', () => {
  let component: IndividualSideCardsComponent;
  let fixture: ComponentFixture<IndividualSideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualSideCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
