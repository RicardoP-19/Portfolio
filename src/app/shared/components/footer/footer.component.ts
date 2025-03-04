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

  /**
  * Changes the logo's image source to the yellow version when the mouse hovers over it.
  * This action is only triggered if the device is not mobile.
  * @function
  */
  onMouseOver() {
    if (!this.isMobile) {
      this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png'; 
    }
  }

  /**
  * Resets the logo's image source back to the blue version when the mouse leaves the logo.
  * @function
  */
  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }
}
