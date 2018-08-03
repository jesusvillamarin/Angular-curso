import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google maps!';
  opciones: any = [
    { plan: 'gratuito', distancia: 1, kilometraje: 1, nombre: 'Jesus', apellido: 'Villamarín', status: false },
    { plan: 'pagado', distancia: 2, kilometraje: 7, nombre: 'Marcelo', apellido: 'Miron', status: true },
    { plan: 'gratuito', distancia: 3, kilometraje: 50, nombre: 'Edwin', apellido: 'Balseca', status: false },
    { plan: 'pagado', distancia: 1, kilometraje: 5, nombre: 'Mónica', apellido: 'Sánchez', status: true },
    { plan: 'pagado', distancia: 2, kilometraje: 10, nombre: 'Irving', apellido: 'Guzman', status: false }
  ];

  titulo: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  valor: number = 10;


  constructor() {
    // setTimeout( () => {
    //   alert('Ya cargo la página');
    // }, 3000);
  }

  show() {
    alert('Este mensaje es del elemento show');
  }

}
