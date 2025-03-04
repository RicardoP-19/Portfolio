import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ResponsivService } from '../../shared/services/responsiv.service';
import { SendConfirmComponent } from "./send-confirm/send-confirm.component";
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, TranslateModule, RouterLink, SendConfirmComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  http = inject(HttpClient);
  responsivService = inject(ResponsivService);
  isMobile: boolean = false;
  isChecked: boolean = false;
  reviewCheck: boolean = false;
  emailValidation = false;
  sendMail = false;
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

  /**
  * Handles the form submission and sends the contact data via an HTTP POST request.
  * Resets the form after submission or if `mailTest` is true.
  * @param {NgForm} ngForm - The Angular form object.
  * @function
  */
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
          // complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  /**
  * Toggles the checkbox state and updates the reviewCheck flag based on the checkbox status.
  * @function
  */
  check() {
    if (this.isChecked) {
      this.reviewCheck = true;
    }
    this.isChecked = !this.isChecked;
  }

  /**
  * Displays a confirmation message after sending the contact form.
  * It also disables scrolling for 1 second while the confirmation is visible.
  * @function
  */
  sendConfirm() {
    this.sendMail = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.sendMail = false;
      document.body.style.overflow = 'auto';
    }, 1000)
  }
}
