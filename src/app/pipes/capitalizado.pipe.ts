import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

    // Recibe un parámetro string y un booelan que por defecto es TRUE, a menos q indiquemos FALSE
    transform(value: string, todas: boolean = true): string {

        // Convertimos el string en minúsculas
        value = value.toLowerCase();

        // Separar todas las palabras
        let nombres = value.split(' ');

        // Si la variable todas es TRUE, entonces, se capitaliza la primera letra de cada palabra
        if (todas){
            for (let i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } 
        else {
        // Si todas es FALSE, se capitaliza solo la primera letra
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }
        
    

        // Unimos todos los nombres
        return nombres.join(' ');
    }

}
