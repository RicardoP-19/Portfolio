import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageServiceService {
  language: string = 'en';
  
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    const savedLanguage = sessionStorage.getItem('language');
    if (savedLanguage) {
    this.language = savedLanguage;
    }
    this.translate.use(this.language);
  }

  changeLanguage(language: string): void {
    this.language = language;
    sessionStorage.setItem('language', this.language);
    this.translate.use(this.language);
  }
}