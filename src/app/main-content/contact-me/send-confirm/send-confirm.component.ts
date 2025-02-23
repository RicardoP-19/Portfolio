import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-send-confirm',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './send-confirm.component.html',
  styleUrl: './send-confirm.component.scss'
})
export class SendConfirmComponent {
  @Input() sendMail: boolean = false;

  constructor(public translate: TranslateService) {}
}
