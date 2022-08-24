import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

   termino: string = '';
   heroes: Heroe[] = [];
   heroSelect!: Heroe | undefined;

   constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

   buscando() {
      this.heroesService.getSugerencias(this.termino)
         .subscribe({
            next: hero => this.heroes = hero,
            error: (err) => console.log(err),
            // complete: () => this.termino = ''
         })
   }

   optSelected(event: MatAutocompleteSelectedEvent) {

      if (!event.option.value) {
         this.heroSelect = undefined;
         return;
      }

      const heroe: Heroe = event.option.value;
      // console.log(heroe)
      this.termino = heroe.superhero

      this.heroesService.getHeroePorId(heroe.id!)
         .subscribe({
            next: (hero) => this.heroSelect = hero,
            error: (error) => console.log(error)
         })
   }

}
