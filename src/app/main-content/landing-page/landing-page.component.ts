import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  hoverIndexTop: number | null = null;
  hoverIndexBottom: number | null = null;
  isHovered = false;

  constructor(public translate: TranslateService) {}

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

  mouseOverTop(index: number) {
    this.hoverIndexTop = index;
  }

  mouseOutTop() {
    this.hoverIndexTop = null;
  }

  mouseOverBottom(index: number) {
    this.hoverIndexBottom = index;
  }

  mouseOutBottom() {
    this.hoverIndexBottom = null;
  }

  mouseOverPhoto() {
    this.isHovered = true;
  }

  mouseOutPhoto() {
    this.isHovered = false;
  }
}
