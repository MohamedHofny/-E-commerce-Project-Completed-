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
  isLogin: boolean = true;

  // Login
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Register
  regName: string = '';
  regEmail: string = '';
  regPassword: string = '';
  regConfirmPassword: string = '';
  regError: string = '';
  regSuccess: string = '';

  constructor(private router: Router) {}

  handleLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);
    if (user || (this.email === 'admin@admin.com' && this.password === '123456')) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }

  handleRegister() {
    if (this.regPassword !== this.regConfirmPassword) {
      this.regError = 'Passwords do not match!';
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === this.regEmail);
    if (exists) {
      this.regError = 'Email already registered!';
      return;
    }
    users.push({ name: this.regName, email: this.regEmail, password: this.regPassword });
    localStorage.setItem('users', JSON.stringify(users));
    this.regSuccess = 'Account created successfully! Please login.';
    this.regError = '';
    setTimeout(() => { this.isLogin = true; }, 2000);
  }
}