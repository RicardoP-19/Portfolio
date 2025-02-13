import { Component, inject, Input} from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../shared/services/project.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})

export class OverlayComponent {
  projectService = inject(ProjectService);
  @Input() project: Project | null = null;

  constructor(public translate: TranslateService) {}

  nextProject() {
    this.project = this.projectService.nextProject();
  }

  backProject() {
    this.project = this.projectService.backProject ();
  }

  closeOverlay() {
    this.project = null;
    document.body.style.overflow = 'auto';
  }
}
