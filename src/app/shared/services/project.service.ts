import { Injectable } from '@angular/core';
import { Project } from '../../main-content/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectIndex: number = 0;

  constructor() {}

  readonly frontendProjects: Project[] = [
    {
      title: 'Pokedex',
      path: './assets/project_images_icons/images/pokedex.png',
      descriptionEn: 'A Pokédex that uses the PokéAPI to retrieve and clearly display detailed information on Pokémon such as type, abilities, attacks and evolutions. Ideal for trainers and fans.',
      descriptionDe: 'Ein Pokédex, der die PokéAPI nutzt, um detaillierte Informationen zu Pokémon wie Typ, Fähigkeiten, Attacken und Entwicklungen abzurufen und übersichtlich darzustellen. Ideal für Trainer und Fans.',
      implementationEn:'As part of this project, I independently conceived, designed and developed a Pokédex. The web application was realized with HTML, CSS and JavaScript and uses fetch() to retrieve detailed Pokémon data from the PokéAPI in real time. Thanks to the intuitive interface, users can retrieve information such as Pokémon names, types, abilities and images. This project demonstrates my skills in independent development and modern UI design.',
      implementationDe: 'Im Rahmen dieses Projekts habe ich eigenständig einen Pokédex konzipiert, designt und entwickelt. Die Webanwendung wurde mit HTML, CSS und JavaScript realisiert und nutzt fetch(), um in Echtzeit detaillierte Pokémon-Daten von der PokéAPI abzurufen. Dank der intuitiven Oberfläche können Nutzer Informationen wie Name, Typen, Fähigkeiten und Bilder der Pokémon abrufen. Dieses Projekt demonstriert meine Fähigkeiten in selbstständiger Entwicklung und modernem UI-Design.',
      durationEn: '2 Weeks',
      durationDe: '2 Wochen',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'}
      ],
      gitHub: 'https://github.com/RicardoP-19/Pokedex',
      liveTest: 'https://pokedex.ricardo-pinto.com',
      svg: 200
    },
    {
      title: 'Join',
      path: './assets/project_images_icons/images/join.png',
      overlay: './assets/project_images_icons/images/join_white.png',
      descriptionEn: 'Task manager inspired by the Kanban system. Create and organize tasks with drag & drop functions, assign users and categories.',
      descriptionDe: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      implementationEn:'The web application was realized with HTML, CSS and JavaScript and uses Firebase to store and manage tasks and data in real time. Tasks can be moved between different categories and assigned to users via drag & drop. Users can create, organize and efficiently manage tasks. We used Git to coordinate version control and team collaboration. This project demonstrates my ability to develop complex applications and collaborate effectively as a team.',
      implementationDe:'Die Webanwendung wurde mit HTML, CSS und JavaScript realisiert und nutzt Firebase, um Aufgaben und Daten in Echtzeit zu speichern und zu verwalten. Über Drag & Drop können Aufgaben zwischen verschiedenen Kategorien verschoben und Benutzern zugewiesen werden. Nutzer können Aufgaben erstellen, organisieren und effizient verwalten. Mit Git haben wir die Versionskontrolle und Zusammenarbeit im Team koordiniert. Dieses Projekt zeigt meine Fähigkeit, komplexe Anwendungen zu entwickeln und im Team effektiv zusammenzuarbeiten.',
      durationEn: '5 Weeks',
      durationDe: '5 Wochen',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'},
        {path: './assets/project_images_icons/icons/skills/git.png', name: 'Git'},
        {path: './assets/project_images_icons/icons/skills/firebase.png', name: 'Firebase'}
      ],
      gitHub: 'https://github.com/RicardoP-19/Join',
      liveTest: 'https://join.ricardo-pinto.com',
      svg: 120
    },
    {
      title: 'El Pollo Loco',
      path: './assets/project_images_icons/images/el_pollo_loco.png',
      descriptionEn: 'Jumping, running and throwing game with an object-oriented approach. Help Pepe find coins and Tabasco salsa to fight against the crazy hen.',
      descriptionDe: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      implementationEn:'I developed this 2D game independently using HTML, CSS and JavaScript in object-oriented programming (OOP). The game uses classes and instances for the structured management of game characters, movements and collision detection. The game mechanics include animations, controls and interactive elements that enable a dynamic gaming experience. The game logic and rendering were implemented entirely with JavaScript. This project demonstrates my skills in OOP and game development.',
      implementationDe: 'Ich habe dieses 2D-Spiel eigenständig mit HTML, CSS und JavaScript in objektorientierter Programmierung (OOP) entwickelt. Das Spiel verwendet Klassen und Instanzen zur strukturierten Verwaltung von Spielfiguren, Bewegungen und Kollisionserkennung. Die Spielmechanik umfasst Animationen, Steuerungselemente und interaktive Elemente, die eine dynamische Spielerfahrung ermöglichen. Die Spiellogik und das Rendering wurden vollständig mit JavaScript umgesetzt. Dieses Projekt zeigt meine Fähigkeiten in OOP und Spielentwicklung.',
      durationEn: '4 Weeks',
      durationDe: '4 Wochen',
      skills: [
        {path: './assets/project_images_icons/icons/skills/html.png', name: 'HTML'},
        {path: './assets/project_images_icons/icons/skills/css.png', name: 'CSS'},
        {path: './assets/project_images_icons/icons/skills/js.png', name: 'Javascript'}
      ],
      gitHub: 'https://github.com/RicardoP-19/El-Pollo-Loco',
      liveTest: 'https://game.ricardo-pinto.com',
      svg: 290
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

  backProject(): Project {
    this.projectIndex--;
    if (this.projectIndex < 0) {
      this.projectIndex = this.frontendProjects.length - 1;
    }
    return this.frontendProjects[this.projectIndex];
  }
}