import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ResponsivService } from '../../shared/services/responsiv.service';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, TranslateModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  http = inject(HttpClient);
  responsivService = inject(ResponsivService);
  isMobile: boolean = false;
  isChecked: boolean = false;
  reviewCheck: boolean = false;
  stickerTextEn = ' Ricardo Pinto - Frontend Developer -'.split('');
  stickerTextDe = ' Ricardo Pinto - Frontend Entwickler -'.split('');  

  constructor(public translate: TranslateService) {
    this.responsivService.isMobile.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;

  post = {
    endPoint: 'https://ricardo-pinto.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {            
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  check() {
    if (this.isChecked) {
      this.reviewCheck = true;
    }
    this.isChecked = !this.isChecked;
  }
}
