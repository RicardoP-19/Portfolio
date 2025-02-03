import { Component, inject, Input} from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../shared/services/project.service';
// import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})

export class OverlayComponent {
  projectService = inject(ProjectService);
  @Input() project: Project | null = null;

  nextProject() {
    this.project = this.projectService.nextProject();
  }

  previousProject() {
    this.project = this.projectService.previousProject();
  }

  closeOverlay() {
    this.project = null;
    document.body.style.overflow = 'auto';
  }
}
