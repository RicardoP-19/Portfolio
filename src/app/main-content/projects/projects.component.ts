import { Component, inject } from '@angular/core';
import { OverlayComponent } from "./overlay/overlay.component";
import { Project } from '../interfaces/project.interface';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projectService = inject(ProjectService);
  selectedProject: Project | null = null;

  openOverlay(index:number) {
    this.selectedProject = this.projectService.projects[index];
    document.body.style.overflow = 'hidden';
  }
}
