import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageServiceService } from '../../services/language.service.service';
import { TranslateModule } from '@ngx-translate/core';
import { ResponsivService } from '../../services/responsiv.service';
import { BurgerMenuComponent } from "./burger-menu/burger-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  languageService = inject(LanguageServiceService);
  responsiveService = inject(ResponsivService);

  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png';
  burgeMenuOpen: boolean = false;

  get language(): string {
    return this.languageService.language;
  }

  /**
  * Changes the language of the application.
  * @param {string} language - The language code to switch to (e.g., 'en', 'de').
  * @function
  */
  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }

  /**
  * Changes the logo's image source to the yellow version when the mouse hovers over it.
  * @function
  */
  onMouseOver() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png';
  }

  /**
  * Resets the logo's image source back to the blue version when the mouse leaves the logo.
  * @function
  */
  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }

  /**
  * Toggles the state of the burger menu (opens/closes the menu).
  * @function
  */
  openBurgerMenu() {
    this.burgeMenuOpen = !this.burgeMenuOpen;
  }
}