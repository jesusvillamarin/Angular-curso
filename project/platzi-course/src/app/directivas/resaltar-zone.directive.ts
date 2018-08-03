import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[resaltar]'
})
export class ResaltarZoneDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // Variables
  clicksNum: number = 0;
  @Input('resaltar') plan: any = '';


  // Funciones
  @HostListener('click', ['$event.target']) onClick(element) {
    console.log('Evento clic', element, 'número de clicks: ', ++this.clicksNum);
  }

  ngOnInit() {
    if (this.plan === 'pagado') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');
    }
  }


}
