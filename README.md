# Curso Angular
- 31/07/2018
- Jesús A. Villamarín O.

## Que es Angular?
Es un framework de javascript que permite crear aplicaciones web SPA (**Single Page Application**)

### que son aplicaciones SPA?
Son aplicaciones que el navegador no necesita refrescar/redirigir de página con el ruteador de angular en modo reactivo.

### Versiones de Angular
* Angular 1 o tambien conocido como AngularJS 
* Angular 2 = Se escribio nuevamente por completo el framework
* Angular 4 = Primer update de Angular 2

Nota: Se saltaron la versión 3 debído a que el Modulo de routing tenia conflictos de versiones, Google decidio inicalizar todos los modulos con 4.0.0

### Que es Typescript?
* Superset de javascript - mejorado de javascript - agregado de javascript no reemplazo
* Agrega nuevas caracteristicas :
    - Tipos
    - Clases
    - Interfaces 

* Typescript es transpilado a javascript, debído a que los navegadores no lo entienden.


### Modulos
Son piezas las piezas mas grandes en las que se puede dividir un proyecto en Angular 

- Angular posee modulos nativos, de terceros y propios 

### Para anotar nuestro módulos y además -> src/app/app.module.ts

    - Declarations: Componentes.

    - Imports: módulos externos a importar.

    - Providers: servicios necesarios.

    - Bootstrap: con que componente vamos a iniciar.

### Data binding :
Es la comuncación entre el código typescript y el HTML de un componente

* Existen varios tipos de data binding y estos son:
    - String interpolation {{nombreVar}}     typescript -> HTML
    - Property Binding [valor]               typescript <- HTML
    - Event Bindiing (event)                 typescript <- HTML
    - Two way data binding [(ngModel)]       typescript <-> HTML

* Para el two data binding es necesario importar FormsModule en el componente principal, es decir en app.module.ts y agregarlo en la propiedad de **imports**

Quedando de la siguiente manera:
```
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; ---------> importado
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule                               ------------- agregado
  ],
  .
  .
```



