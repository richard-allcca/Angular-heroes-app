import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment'; // local
// import { environment } from '../../../environments/environment'; // prod

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(id: string) {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string) {
    return this.http.get<Heroe[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=6`
    );
  }

  // Seccion 14
  agregarHeroe(heroe: Heroe) {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  editarHeroe(heroe: Heroe) {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarHeroe(id: string) {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`);
  }
}
