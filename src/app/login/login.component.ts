// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  password: string = '';
  userName: string = ";"
  constructor(private router: Router) {}

  login() {
    if (this.password === '123' && this.userName==='user') {
      // Navigate to TestingComponent if the password is equal to 123
      this.router.navigate(['/dashboard']);
    }
  }
}
