import { Component } from '@angular/core';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent {
  n1: number = 0;
  n2: number = 0;
  resultado : number = 0;
  operador = '+';

  estado_juego: string = '';

  operar(){
    this.resultado = eval(this.n1 + this.operador+ this.n2);
  }

  setOperador(operador:string){
    this.operador = operador;
    this.operar();
  }

  cambiar_estado(event: Event){
    console.log((<HTMLInputElement>event.target).value);

    this.estado_juego = "El juego se ha " + (<HTMLInputElement>event.target).value;
  }
}
