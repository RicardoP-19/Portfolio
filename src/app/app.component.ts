import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IntroComponent } from './intro/intro.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  showIntro: boolean = true;
  hideHeader: boolean = false;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit():void {
    if (sessionStorage.getItem('introShown')) {
      this.showIntro = false;
    } else {
      setTimeout(() => {
        this.showIntro = false;
        sessionStorage.setItem('introShown', 'true');
      }, 5500);
    }

    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideHeader = event.url === '/imprint' || event.url === '/privacy-policy';
      } 
    });
  }
}
