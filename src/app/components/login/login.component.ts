import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  handleLogin() {
    if (this.email === 'admin@admin.com' && this.password === '123456') {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}