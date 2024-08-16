import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre:string = "Josue";
  apellido = "Mejia";
  edad = 16;
  empresa = 'CSJ';

  getEdad(){
    return this.edad;
  }

  llamar_empresa(empresa:string){}
}
