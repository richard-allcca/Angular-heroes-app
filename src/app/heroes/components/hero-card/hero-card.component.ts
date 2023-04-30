import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCard implements OnInit {

  @Input() hero!: Heroe;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    // this.heroe.characters
  }

}
