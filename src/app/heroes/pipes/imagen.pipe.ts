import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
   name: 'imagen',
   // pure: false
})
export class ImagenPipe implements PipeTransform {

   transform(heroe: Heroe): string {

      if (!heroe.id && !heroe.alt_img) return `assets/no-image.png`;

      if (heroe.alt_img) return heroe.alt_img;

      return `assets/heroes/${heroe.id}.jpg`;
   }

}

// NOTE - 
// Pipe puro o impuro se activa en el decorador
// aun que no es recomendable en este caso lo usamos para ver la imagen del heroe editado nuevo o editado
