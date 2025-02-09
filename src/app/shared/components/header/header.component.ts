import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png';
  currentLanguage: string;

  constructor(public translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
    const scrollball = document.querySelector('.scrollball') as HTMLElement;
    scrollball.classList.remove('scroll-left', 'scroll-right');
    if (language == 'en') {
      scrollball.classList.add('scroll-left');
      this.translate.use(this.currentLanguage);
    } else if (language == 'de') {
      scrollball.classList.add('scroll-right');
      this.translate.use(this.currentLanguage);
    }
  }

  onMouseOver() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png';
  }

  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }
}