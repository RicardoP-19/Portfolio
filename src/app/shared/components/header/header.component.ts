import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageServiceService } from '../../services/language.service.service';
import { TranslateModule } from '@ngx-translate/core';
import { ResponsivService } from '../../services/responsiv.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  languageService = inject(LanguageServiceService);
  responsiveService = inject(ResponsivService);

  language: string = this.languageService.language;
  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png';

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    this.language = language;
  }

  onMouseOver() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png';
  }

  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }
}