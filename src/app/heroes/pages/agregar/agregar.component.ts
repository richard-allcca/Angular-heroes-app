import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';

import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector: 'app-agregar',
   templateUrl: './agregar.component.html',
   styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

   publishers = [
      {
         id: 'DC Comics',
         desc: 'DC - Comics'
      },
      {
         id: 'Marvel Comins',
         desc: 'Marvel - Comics'
      }
   ]

   heroe: Heroe = {
      superhero: '',
      publisher: Publisher.DCComics,
      alter_ego: '',
      first_appearance: '',
      characters: '',
      alt_img: ''
   }


   constructor(
      private heroesService: HeroesService,
      private activateRoute: ActivatedRoute,
      private snackBar: MatSnackBar,
      private dialog: MatDialog,
      private router: Router) { }


   ngOnInit(): void {
      if (this.router.url.includes('editar')) {

         this.activateRoute.params
            .pipe(
               switchMap(({ id }) => this.heroesService.getHeroePorId(id))
            )
            .subscribe({
               next: (heroe) => console.log(this.heroe = heroe),
               error: (e) => console.log(e)
            })
      }

   }

   guardar() {
      if (this.heroe.superhero.trim().length === 0) return;

      if (this.heroe.id) {
         this.heroesService.editarHeroe(this.heroe)
            .subscribe({
               next: (heroe) => {
                  this.mostrarSnackBar('Heroe Actualizado 👌')
                  this.router.navigate(['/heroes', heroe.id])
               }
            })
      }

      this.heroesService.agregarHeroe(this.heroe)
         .subscribe({
            next: (heroe) => {
               this.mostrarSnackBar('Heroe Guardado 👍')
               this.router.navigate(['/heroes', heroe.id])
            },
            error: (e) => console.log(e)
         })
   }

   eliminar(id: string) {

      const dialogPrimary = this.dialog.open(ConfirmarComponent, {
         width: '250px',
         data: this.heroe
      })

      dialogPrimary.afterClosed()
         .subscribe({
            next: (result) => {
               if (result) {

                  this.heroesService.eliminarHeroe(id)
                     .subscribe({
                        next: () => {
                           this.mostrarSnackBar('Heroe Eliminado ⚠')
                           this.router.navigate(['/heroes'])
                        },
                        error: (e) => console.log(e)
                     })
               }
            },
            error: (e) => console.log(e)

         })

   }

   mostrarSnackBar(mensaje: string) {
      this.snackBar.open(mensaje, 'ok!', {
         duration: 2500
      })
   }

}
