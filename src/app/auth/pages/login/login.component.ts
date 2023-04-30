import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  login() {

    //  this.router.navigate(['/heroes']);
    this.authService.login().subscribe({
      next: (resp) => {
        console.log(resp);
        if (resp.id) {
          this.router.navigate(['/heroes']);
        }
      },
      error: (e) => console.log(e),
    });
  }

  sinLogin() {

    this.router.navigate(['/heroes']);
  }
}
