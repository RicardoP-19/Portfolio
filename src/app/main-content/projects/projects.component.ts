import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  frontendProjects= [
    {
      path: './assets/project_images_icons/images/pokedex.png',
      title: 'Pokedex',
      description: 'Ein Pokédex, der die PokéAPI nutzt, um detaillierte Informationen zu Pokémon wie Typ, Fähigkeiten, Attacken und Entwicklungen abzurufen und übersichtlich darzustellen. Ideal für Trainer und Fans.'
    },
    {
      path: './assets/project_images_icons/images/join.png',
      title: 'Join',
      description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    },
    {
      path: './assets/project_images_icons/images/el_pollo_loco.png',
      title: 'El Pollo Loco',
      description: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.'
    }
  ]
}
