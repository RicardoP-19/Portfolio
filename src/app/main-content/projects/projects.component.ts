import { Component, inject } from '@angular/core';
import { OverlayComponent } from "./overlay/overlay.component";
import { Project } from '../interfaces/project.interface';
import { ProjectService } from '../../shared/services/project.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, OverlayComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projectService = inject(ProjectService);
  selectedProject: Project | null = null;

  constructor(public translate: TranslateService) {}

  /**
  * Opens the overlay and sets the selected project based on the provided index.
  * It also disables page scrolling while the overlay is visible.
  * @param {number} index - The index of the selected project from the project list.
  * @function
  */
  openOverlay(index:number) {
    this.projectService.projectIndex = index;
    this.selectedProject = this.projectService.projects[index];
    document.body.style.overflow = 'hidden';
  }
}
