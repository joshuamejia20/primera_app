import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = 'Juan';
  apellido = 'Perez';
  edad:number = 15;
  empresa = 'Otra';

  getEdad(){
    return this.edad;
  }

  set_empresa(empresa: string){}
}
