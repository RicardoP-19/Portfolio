import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-send-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './send-confirm.component.html',
  styleUrl: './send-confirm.component.scss'
})
export class SendConfirmComponent {
  @Input() sendMail: boolean = false;
}
