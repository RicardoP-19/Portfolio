import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  imageSrc: string = 'assets/project_images_icons/logo/logo_blue.png'

  onMouseOver() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_yellow.png';
  }

  onMouseOut() {
    this.imageSrc = 'assets/project_images_icons/logo/logo_blue.png';
  }
}
