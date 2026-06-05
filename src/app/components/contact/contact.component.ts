import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = '';

  handleSubmit() {
    if (this.name && this.email && this.message) {
      this.successMessage = 'Message sent successfully! We will get back to you soon.';
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}