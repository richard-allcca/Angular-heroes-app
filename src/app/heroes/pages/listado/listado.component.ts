import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

   listHeroes: Heroe[] = [];

   constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

     this.heroesService.getHeroes()
        .subscribe(data => {
           this.listHeroes = data
        }) 
  }


}