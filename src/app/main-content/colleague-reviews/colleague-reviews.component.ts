import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-colleague-reviews',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './colleague-reviews.component.html',
  styleUrl: './colleague-reviews.component.scss'
})
export class ColleagueReviewsComponent {

  constructor(public translate: TranslateService) {}
}
