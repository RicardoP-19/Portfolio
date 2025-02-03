import { Injectable } from '@angular/core';
import { Project } from '../../main-content/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectIndex: number = 0;

  constructor() { }

  readonly frontendProjects: Project[] = [
    {
      title: 'Pokedex',
      path: './assets/project_images_icons/images/pokedex.png',
      description: 'Ein Pokédex, der die PokéAPI nutzt, um detaillierte Informationen zu Pokémon wie Typ, Fähigkeiten, Attacken und Entwicklungen abzurufen und übersichtlich darzustellen. Ideal für Trainer und Fans.',
      implementation: 'Im Rahmen dieses Projekts habe ich eigenständig einen Pokédex konzipiert, designt und entwickelt. Die Webanwendung wurde mit HTML, CSS und JavaScript realisiert und nutzt fetch(), um in Echtzeit detaillierte Pokémon-Daten von der PokéAPI abzurufen. Dank der intuitiven Oberfläche können Nutzer Informationen wie Name, Typen, Fähigkeiten und Bilder der Pokémon abrufen. Dieses Projekt demonstriert meine Fähigkeiten in selbstständiger Entwicklung und modernem UI-Design',
      duration: '2 Weeks',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'}
      ],
      gitHub: 'https://github.com/RicardoP-19/Pokedex'
    },
    {
      title: 'Join',
      path: './assets/project_images_icons/images/join.png',
      overlay: './assets/project_images_icons/images/join_white.png',
      description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      implementation: 'In unserem Teamprojekt Join haben wir einen Aufgabenmanager entwickelt. Die Webanwendung wurde mit HTML, CSS und JavaScript entwickelt und nutzt Firebase zur Speicherung und Verwaltung der Daten. Zur Versionskontrolle und Zusammenarbeit haben wir Git verwendet.',
      duration: '5 Weeks',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'},
        {path: './assets/project_images_icons/icons/skills/git.png', name: 'Git'},
        {path: './assets/project_images_icons/icons/skills/firebase.png', name: 'Firebase'}
      ],
      gitHub: 'https://github.com/RicardoP-19/Join'
    },
    {
      title: 'El Pollo Loco',
      path: './assets/project_images_icons/images/el_pollo_loco.png',
      description: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      implementation: 'Ich habe dieses 2D-Spiel eigenständig mit HTML, CSS und JavaScript in objektorientierter Programmierung (OOP) entwickelt. Das Spiel verwendet Klassen und Instanzen zur strukturierten Verwaltung von Spielfiguren, Bewegungen und Kollisionserkennung. Die Spielmechanik umfasst Animationen, Steuerungselemente und interaktive Elemente, die eine dynamische Spielerfahrung ermöglichen. Die Spiellogik und das Rendering wurden vollständig mit JavaScript umgesetzt. Dieses Projekt zeigt meine Fähigkeiten in OOP und Spielentwicklung.',
      duration: '4 Weeks',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'}
      ],
      gitHub: 'https://github.com/RicardoP-19/El-Pollo-Loco'
    },
  ]

  get projects(): Project[] {
    return this.frontendProjects.map(project => ({ ...project }));
  }

  nextProject(): Project {
    this.projectIndex++;
    if (this.projectIndex >= this.frontendProjects.length) {
      this.projectIndex = 0;
    }
    return this.frontendProjects[this.projectIndex];
  }

  previousProject(): Project {
    this.projectIndex--;
    if (this.projectIndex < 0) {
      this.projectIndex = this.frontendProjects.length - 1;
    }
    return this.frontendProjects[this.projectIndex];
  }
}