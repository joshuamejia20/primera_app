import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre:string = "Josue";
  apellido = "Mejia";
  edad = 16;
  empresa = 'UCAD';
  habilitar_input_property = true;
  usuario_registrado_property = false;
  texto_registro = "No hay usuario registrado";
  departamento = "2";

  getEdad(){
    return this.edad;
  }

  llamar_empresa(empresa:string){}

  cambiar_registro(){
    this.usuario_registrado_property=!this.usuario_registrado_property;
  }

  set_usuario_registrado(event: Event){
    //alert((<HTMLInputElement>event.target).value);
    this.usuario_registrado_property=!this.usuario_registrado_property;
    //alert('El usuario se ha registrado');
    if((<HTMLInputElement>event.target).value=="si"){
      this.texto_registro = "El usuario se acaba de registrar";
    }else{
      this.texto_registro = "No hay usuario registrado";
    }
  }

  /*cambiar_empresa(event: Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }*/
}
