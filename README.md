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

## Comandos básicos de Angular 
 - ng new projectName
Crear componentes, directivas, pipes y servicios

* Angular CLI nos ofrece una forma fácil de crear elementos en nuestra aplicación

    * Componente 	ng generate component mi-componente
    * Directiva 	ng generate directive mi-directiva
    * Pipe 	        ng generate pipe mi-pipe
    * Servicio 	    ng generate service mi-servicio
    * Clase 	    ng generate class mi-clase
    * Ruta 	        ng generate route mi-ruta

Tambien podemos usar ‘ng g’ en vez de ‘ng generate’

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

## Directivas
 Forma elegante y muy rápida de manipular la información, existen 3 tipos y son:

 * Directivas de componentes -- directivas con un template <selectores>
 * Directivas estructurales  -- directivas que cambian el DOM *ngFor, *ngIf, *ngSwitch
 * Directivas de atributo    -- Cambiar la apariencia o comportamiento de un atributo ngStyle, ngClass


### NOTA 
Angular por defecto no acepta 2 directivas estructurales en un elemento, por lo que es necesario agregar un tag html propio de Angular

* ng-container
Es necesario encerrar el elemento que necesitamos agregarle dos directivas estructurales en el tag de angular, por ejemplo:
```
    <ul>
      <ng-container *ngFor="let option of opciones">
          <li *ngIf='option.status'> {{ option.nombre +" "+ option.apellido }}</li>
      </ng-container>
    </ul>

    <ul>
      <ng-container *ngFor="let option of opciones">
          <li *ngIf="!option.status">{{option.nombre +" "+ option.apellido}}</li>
      </ng-container>
    </ul>

```

### Tambíen podemos usar atributos de Angular como lo son:
- odd (impar)
- even (par)

### Un ejemplo donde se puede aplicar esto es saber si el indice de un array es par o impar

```
    <ul>
        <li *ngFor= let mivar of array; odd as par>
    </ul>

```

### Existe una directiva para cambiar los estilos ya sea cuando se cumpla una condición, en este caso se usa un if ternario, ó podemos omitir la condición y que solo asigne un color


Esta directiva es ngStyle y va dentro de corchetes [], se puede usar cualquier propiedad de estilos css. Usando una condición if, podras aplicar un estilo si es **true**  y otro diferente si es **false**. Por ejemplo...

```}
    <ng-container *ngFor="let option of array"> 
        <ul>
            <li [ngStyle]="{color: (true) ? 'blue' : 'red'}">    
        </ul>
    </ng-container>

    - En este caso nunca va aplicar el color de fuente azul debído a que la condición siempre sera true

```
ó sin condición quedaria así
> <p [ngStyle]={background-color:'red'}> lorem ipsum.... </p>


### Otra directiva mejor que ngStyle es ngClass, la cual permite asignarle una clase completa de css a un elemento html siempre y cuando cumpla una condición, un ejemplo es el de la siguiente manera
```
    <ng-container *ngFor=let option of options>
        <ul>
            <li [ngClass]="nombreClase: condición"> texto a imprimir
        </ul>
     </ng-container>
```

### Directia ngSwitch
```
 <ng-container *ngFor="let option of opciones; let i = index" [ngSwitch]="option.distancia">
    <li>{{option.nombre +" "+ option.apellido}} - Vive
        <span *ngSwitchCase="1" [ngStyle]="{color:'green'}">Muy cerca</span>
        <span *ngSwitchCase="2" [ngStyle]="{color:'yellow'}">Cerca</span>
        <span *ngSwitchCase="3" [ngStyle]="{color:'red'}">Lejos</span>
    </li>
</ng-container>
```

## Podemos crear nuestra propía directiva usando el comando:
- ng generate directive nombreDirectiva
Por defecto Angular Cli importa la directiva a app.module.ts y tambien lo agrega en declarations. Ejemplo:
```
@Directive({
  selector: '[resaltar]'
})
export class ResaltarZoneDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @Input('resaltar') plan: any = '';

  ngOnInit() {
    if (this.plan === 'pagado') {
        
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }

    if( this.plan === 10){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    }
  }
```
 * Como lo vemos en el ejemplo hacemos uso del decorador **@Directive** para definir el selector que podremos usar en el html del componente que lo requiramos.

 * En el @Input('resaltar') plan: string = '', declaramos el @Input de typescript para decir que recibiremos un elemento del html, el elemento será aquel en el hagamos uso de la directiva, por ejemplo

 > li [resaltar]='option.plan'{{option.nombre +" "+ option.apellido}} - Vive
 
* Renderer2 sirve para renderizar los elementos en el html
* ElementRef es para hacer referencia al elemento que se esta recibiendo en @Input
* la variable plan recibe el valor de html ya sea 'pagado' o 'gratuito' y aplica el background-color red
* la variable plan tambien puede recibir otro valor, debido a que el tipo definido es **any** y si el valor es 10 le aplicara el background-color blue

## @HostListener una forma de escuchar los eventos de un elemento del DOM de manera muy sencilla
Se puede crear una directva muy aparte de las demás para tener su propio selector ó se puede reciclar una directiva ya existente.

* La diferencia de crear una directiva para usar el **HostListener** es que se puede crear un selector especifico de un elemento, como el siguiente caso
```
    @Directive({
        selector:'a[name-selector]'
    })

    @HostListener('click',['$event.target']) onClick(element){
        console.log('El elemento target es', element);
    }
```
* El $event.target es obtener el evento del elemento seleccionado

Solo los elementos **a** y que tengan el selector [name-selector] son quienes ejecutaran el metódo, debido a que no se necesita pasarle un argumento la directiva no esperara un valor

```
    <ng-container *ngFor='let object of array'>
        <li [resalta]='object.pago> {{object.nombre + " " object.apellido }} </li>
    </ng-container>
    
```
En este caso la directiva [resalta] recibira el valorque tengo el objeto.pago y dependiendo el valor que reciba se ejecutara un if, funcion, etc..


```
    <ng-container *ngFor='let object of array'>
        <li [resalta]> {{object.nombre + " " object.apellido }} </li>
    </ng-container>
    
```
En este, ya no se espera ningun argumento, en la directiva











