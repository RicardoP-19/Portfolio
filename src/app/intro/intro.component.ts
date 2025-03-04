import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResponsivService } from '../shared/services/responsiv.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  responsiveService = inject(ResponsivService);
  isMobileValue: boolean = false;
  showIntro: boolean = true;

  constructor() {
    this.responsiveService.isMobile.subscribe(isMobile => {
      this.isMobileValue = isMobile;
    });
  }

  /**
  * Initializes the component and hides the intro after a 4.5-second delay.
  * @function
  */
  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = false;
    }, 4500);
  }

}
