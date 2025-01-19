import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  hoverIndexTop: number | null = null;
  hoverIndexBottom: number | null = null;
  isHovered = false;

  headlineText = [  
    {
      noHoverFrontend: ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'],
      hoverFrontend: ['f', 'R', 'O', 'N', 'T', 'E', 'N', 'D'],
      noHoverDeveloper: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
      hoverDeveloper: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    } 
  ]

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
