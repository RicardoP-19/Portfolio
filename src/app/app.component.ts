import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { IntroComponent } from './intro/intro.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'portfolio';
  showIntro: boolean = true;

  ngOnInit():void {
    const introPlayed = sessionStorage.getItem('introPlayed');
    if (introPlayed) {
      this.showIntro = false;
    } else {
      setTimeout(() => {
        this.showIntro = false;
        sessionStorage.setItem('introPlayed', 'true');
      }, 4100);
    }

    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }
}
