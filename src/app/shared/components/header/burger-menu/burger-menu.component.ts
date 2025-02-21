import { CommonModule } from '@angular/common';
import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { LanguageServiceService } from '../../../services/language.service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})

export class BurgerMenuComponent {
  @Input() burgerMenu: boolean = false;
  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

  languageService = inject(LanguageServiceService);
  language: string = this.languageService.language;

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    this.language = language;
  }

  closeBurgerMenu(): void {
    this.closeMenu.emit();
  }
}
