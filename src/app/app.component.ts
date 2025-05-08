import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
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

export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  showIntro: boolean = true;

  /**
   * Constructs the AppComponent and injects the Angular Router.
   * @param router The Angular Router used to listen for navigation events.
  */
  constructor(private router: Router) {}

  /**
   * Angular lifecycle hook that runs when the component is initialized.
   * It checks if the intro animation has been played before, and if so, skips the intro.
   * Otherwise, it plays the intro animation and stores the status in sessionStorage.
   * It also initializes the AOS (Animate On Scroll) library for scroll animations.
   * Additionally, it subscribes to Angular Router navigation events and refreshes AOS
   * whenever a navigation ends, ensuring that newly loaded content is animated.
  */
  ngOnInit(): void {
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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }

  /**
   * Angular lifecycle hook that runs after the component's view has been fully initialized.
   * It triggers AOS to refresh, ensuring that all animated elements are correctly recognized
   * after the view is ready.
  */
  ngAfterViewInit(): void {
    AOS.refresh();
  }
}