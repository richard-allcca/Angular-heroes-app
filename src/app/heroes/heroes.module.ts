import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroCard } from './components/hero-card/hero-card.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';





@NgModule({
   declarations: [
      AgregarComponent,
      BuscarComponent,
      HeroCard,
      HeroeComponent,
      HomeComponent,
      ImagenPipe,
      ListadoComponent,
      ConfirmarComponent
   ],
   imports: [
      CommonModule,
      FlexLayoutModule,
      FormsModule,
      HeroesRoutingModule,
      MaterialModule,
   ]
})
export class HeroesModule { }
