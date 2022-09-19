import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Heroe } from '../../interfaces/heroes.interface';


@Component({
   selector: 'app-confirmar',
   templateUrl: './confirmar.component.html',
   styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {


   constructor(
      public dialogRef: MatDialogRef<ConfirmarComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Heroe,
   ) { }

   ngOnInit(): void {

      console.log(this.data)
   }

   eliminar() {
      this.dialogRef.close(true)
   }

   cerrar() {
      this.dialogRef.close()
   }

}
