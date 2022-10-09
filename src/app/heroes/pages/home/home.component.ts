import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UsuarioAuth } from '../../../auth/interfaces/auth.interface';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
})
export class HomeComponent {
   // auth!: UsuarioAuth;

   get auth() {
      return this.authService.auth;
   }

   constructor(private router: Router, private authService: AuthService) { }


   logout() {

      this.router.navigate(['./auth']);
      // TODO - falta eliminar el auth de service para eliminar el "ls-id-token" y cerrar sesion
   }
}
