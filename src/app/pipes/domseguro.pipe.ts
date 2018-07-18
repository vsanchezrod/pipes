import { Pipe, PipeTransform } from '@angular/core';
// Se importa para segurarnos de que el código está limpio
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor (private domSanitizer: DomSanitizer) {}

  // El pipe va a recibir dos strings
  transform(value: string, url: string): any {

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }



}
