import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public translate: TranslateService) {}

  frontendSkillsTop = [
    {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
    {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
    {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'},
    {path: './assets/project_images_icons/icons/skills/ts.png', name: 'Typescript'},
    {path: './assets/project_images_icons/icons/skills/angular.png', name: 'Angular'}
  ]

  frontendSkillsBottom = [
    {path: './assets/project_images_icons/icons/skills/firebase.png', name: 'Firebase'},
    {path: './assets/project_images_icons/icons/skills/git.png', name: 'Git'},
    {path: './assets/project_images_icons/icons/skills/api.png', name: 'Rest-Api'},
    {path: './assets/project_images_icons/icons/skills/scrum.png', name: 'Scrum'},
    {path: './assets/project_images_icons/icons/skills/material-design.png', name: 'Material-Design'}
  ]

  @ViewChild('stickerTop') stickerTop!: ElementRef;
  @ViewChild('stickerBottom') stickerText!: ElementRef;
  @ViewChild('stickerTopContent') stickerTopContent!: ElementRef;

  startAnimation(): void {
    const stickerElementTop = this.stickerTop.nativeElement;
    const stickerTopContent = this.stickerTopContent.nativeElement;
    const stickerElementBottom = this.stickerText.nativeElement;

    stickerElementTop.classList.add('animate');
    stickerTopContent.classList.add('d-none');
    setTimeout(() => {
          stickerElementTop.classList.add('d-none');
          stickerElementBottom.classList.remove('d-none');
    }, 500);
  }

  endeAnimation(): void {
    const stickerElementBottom = this.stickerText.nativeElement;
    const stickerElementTop = this.stickerTop.nativeElement;
    const stickerTopContent = this.stickerTopContent.nativeElement;

    stickerElementBottom.classList.add('d-none');
    stickerElementTop.classList.remove('animate', 'd-none');
    stickerTopContent.classList.remove('d-none');
  }
}
