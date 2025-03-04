import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResponsivService } from '../../shared/services/responsiv.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  responsivService = inject(ResponsivService);

  isMobileValue: boolean = false;
  hoverIndexTop: number | null = null;
  hoverIndexBottom: number | null = null;
  isHovered = false;

  constructor(public translate: TranslateService) {
    this.responsivService.isMobile.subscribe(isMobile => {
      this.isMobileValue = isMobile;
    });
  }

  headlineText = {  
    frontend: {
      noHoverFrontend: ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'],
      hoverFrontend: ['f', 'R', 'O', 'N', 'T', 'E', 'N', 'D'],
    },
    developerEn: {
      noHoverDeveloper: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
      hoverDeveloper: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    },
    developerDe: {
      noHoverDeveloper: ['E', 'N', 'T', 'W', 'I', 'C', 'K', 'L', 'E', 'R'],
      hoverDeveloper: ['e', 'n', 't', 'w', 'i', 'c', 'k', 'l', 'e', 'r']
    }
  }

  /**
  * Sets the hover effect for the top section.
  * Only applied on larger screens.
  * @param {number} index - The index of the current hovered element.
  */
  mouseOverTop(index: number) {
    if (!this.isMobileValue) {
      this.hoverIndexTop = index;
    }
  }

  /**
  * Resets the hover effect for the top section.
  */
  mouseOutTop() {
    this.hoverIndexTop = null;
  }

  /**
  * Sets the hover effect for the bottom section.
  * Only applied on larger screens.
  * @param {number} index - The index of the current hovered element.
  */
  mouseOverBottom(index: number) {
    if (!this.isMobileValue) {
      this.hoverIndexBottom = index;
    }
  }

  /**
  * Resets the hover effect for the bottom section.
  */
  mouseOutBottom() {
    this.hoverIndexBottom = null;
  }

  /**
  * Activates the hover effect for the photo.
  */
  mouseOverPhoto() {
    this.isHovered = true;
  }

  /**
  * Deactivates the hover effect for the photo.
  */
  mouseOutPhoto() {
    this.isHovered = false;
  }
}
