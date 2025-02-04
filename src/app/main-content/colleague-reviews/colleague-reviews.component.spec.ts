import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueReviewsComponent } from './colleague-reviews.component';

describe('ColleagueReviewsComponent', () => {
  let component: ColleagueReviewsComponent;
  let fixture: ComponentFixture<ColleagueReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleagueReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColleagueReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
