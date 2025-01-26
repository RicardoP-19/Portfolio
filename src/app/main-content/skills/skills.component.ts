import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  firstLineSkills = [
    './../../../assets/project_images_icons/icons/skills/html.png',
    './../../../assets/project_images_icons/icons/skills/css.png',
    './../../../assets/project_images_icons/icons/skills/js.png',
    './../../../assets/project_images_icons/icons/skills/ts.png',
    './../../../assets/project_images_icons/icons/skills/angular.png',
  ]

  secondLineSkills = [
    './../../../assets/project_images_icons/icons/skills/firebase.png',
    './../../../assets/project_images_icons/icons/skills/git.png',
    './../../../assets/project_images_icons/icons/skills/api.png',
    './../../../assets/project_images_icons/icons/skills/scrum.png',
    './../../../assets/project_images_icons/icons/skills/material-design.png',
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
