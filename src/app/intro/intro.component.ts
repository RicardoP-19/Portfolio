import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  showIntro: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = false;
    }, 5000);
  }

}
