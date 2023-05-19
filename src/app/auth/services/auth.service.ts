import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap, Observable, of, map } from 'rxjs';

import { environment } from './../../../environments/environment';

import { UsuarioAuth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: UsuarioAuth | undefined;

  get auth() {
    return { ...this._auth };
  }


  constructor(private http: HttpClient) { }


  verificaAuth(): Observable<boolean> {

    if (!localStorage.getItem('ls-id-token')) return of(false);

    // REVIEW - min 3 clase 226 para no usar if
    return this.http.get<UsuarioAuth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          // console.log('map', auth)
          this._auth = auth;
          return true;
        })
      );
  }

  login() {

    return this.http
      .get<UsuarioAuth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap((auth) => (this._auth = auth)),
        tap((auth) => localStorage.setItem('ls-id-token', auth.id))
      );
  }

  logout() {

    this._auth = undefined;
    // TODO - falta eliminar el auth de service para eliminar el "ls-id-token" y cerrar sesion
  }
}

// NOTE - "of" metodo para crear Observable en base al argumento que se le pasa