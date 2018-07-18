import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Se crea una variable tipo texto
  nombre = 'Virginia';
  nombre2 = 'enAniTo SancheZ de la fuente dEl bosque';

  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Gandalf',
    clave: 'Mago',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '20'
    }
  };

  valorDePromesa = new Promise( (resolve , reject) => {
    setTimeout( () => resolve ('Llegaron los datos'), 3500);
  });

  fecha = new Date();

  video = 'PeezORsgERI';

  activar = true;

}
