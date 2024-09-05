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
  texto_depto = "Seleccione un departamento";
  estilo_definido = "background-color: red; color: white;";

  cambiar_color(){
    if(this.estilo_definido=="background-color: red; color: white;"){
      this.estilo_definido= "background-color: blue; color: black;";
    }else{
      this.estilo_definido = "background-color: red; color: white;";
    }
  }

  definir_depto(){
    switch (parseInt(this.departamento)) {
      case 1:
        this.texto_depto = "San Salvador";
        break;
      case 2:
        this.texto_depto = "Santa Ana";
        break;
      case 3:
        this.texto_depto = "San Miguel";
        break;
      case 4:
        this.texto_depto = "Sonsonate";
        break;
    
      default:
        this.texto_depto = "Seleccione un departamento";
        break;
    }

    return this.texto_depto;
  }

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
