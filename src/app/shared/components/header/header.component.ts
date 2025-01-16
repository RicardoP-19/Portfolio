import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png';
  currentLanguage: string = 'en';

  onMouseOver() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png';
  }

  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
    const scrollball = document.querySelector('.scrollball') as HTMLElement;
    scrollball.classList.remove('scroll-left', 'scroll-right');
    if (language == 'en') {
      scrollball.classList.add('scroll-left');
    } else if (language == 'de') {
      scrollball.classList.add('scroll-right');
    }
  }
}