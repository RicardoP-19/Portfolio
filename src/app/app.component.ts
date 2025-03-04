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

  /**
  * Angular lifecycle hook that runs when the component is initialized.
  * It checks if the intro animation has been played before, and if so, skips the intro.
  * Otherwise, it plays the intro and stores the status in sessionStorage.
  * It also initializes the AOS (Animate On Scroll) library for animations.
  * @function
  */
  ngOnInit():void {
    const introPlayed = sessionStorage.getItem('introPlayed');
    if (introPlayed) {
      this.showIntro = false;
    } else {
      setTimeout(() => {
        this.showIntro = false;
        sessionStorage.setItem('introPlayed', 'true');
      }, 4600);
    }

    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }
}
