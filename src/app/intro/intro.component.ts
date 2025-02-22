import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResponsivService } from '../shared/services/responsiv.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  responsiveService = inject(ResponsivService);
  isMobileValue: boolean = false;
  showIntro: boolean = true;

    constructor() {
      this.responsiveService.isMobile.subscribe(isMobile => {
        this.isMobileValue = isMobile;
      });
    }

  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = false;
    }, 5000);
  }

}
