import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResponsivService } from '../../services/responsiv.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  responsivService = inject(ResponsivService);
  isMobile: boolean = false;

  constructor(public translate: TranslateService) {
    this.responsivService.isMobile.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png'

  onMouseOver() {
    if (!this.isMobile) {
      this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png'; 
    }
  }

  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }
}
