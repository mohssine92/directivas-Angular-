import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';






@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean ) {
    if ( condicion ) { // si es true , si el input valor valid es true
      this.viewContainer.createEmbeddedView( this.templateRef ); // mostrar
    } else {
      this.viewContainer.clear();
    }
  }

  constructor( // necesito poder mostrar y occultar el elemento html anexado , necesito estos 2 injecciones
    private templateRef: TemplateRef<HTMLElement>, // ref alelemento asi debe captar la ref *
    private viewContainer: ViewContainerRef
  ) {}

  /* recordar se puede usar metodo de cilo de vida de destroy , se dispara al destrocer un componnete el que implementa esta directiva */





}
