import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';





@Directive({
  selector: '[error-msg]' // como los pipes este es el codigo que digo a angular parque imlemente mi directiva - podemos darle cualquier nombre que no choque
  //con nombres de directivas de angular como ngif ngfor
})
export class ErrorMsgDirective implements OnInit, OnChanges {


  /* los inputs de directiva se le asigna valores al momento de construccion de directiva , si los valores se redefienen por parte del componente eso sera un problema no se van a recibir nuevo valor
  pero lo vamos a resolver implementado funcion de ciclo de vida de la directiva pare la redefinicion de los mismos */

  // es un seter comun y corriente - se llama este seter = se llama esta prop
  @Input() set color( valor: string) { // porque arg porque es un seter es valor que le estoy asignado a nivel del componente
    this._color = valor;
    this.setColor(); // se ejecuta este setters solo se cambia la prop por parte del componente asociada
  }

  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido( valor: boolean ) {
    // console.log(valor) , tenemos que implementar las class hidden en nuestro estilos css paraque haga algo
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden'); //351
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }

  }


  // por si acaso no se asocia valores por parte del elementos del componente se toma estos valores por defecto
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el; // ref al elemnto el qeu aplica esta directiva
  }


  ngOnInit(): void {

    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    // ejecuccion de estos metodos , si el elemnto asociado no ha pasado valores a los setters van a tomar valor de las props privadas
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {

   // console.log('onchange')
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }





}
/*
  video de creacion es 345
  podemos ejecutar aqui todo de ciclo de vida que hemos visto a nteriormente
*/
