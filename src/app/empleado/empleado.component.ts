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
  empresa = 'BAC';

  habilitar_input_property = true;
  usuario_registrado_property = false;

  texto_registro = 'No hay nadie registrado';
  seleccion ='Hola';

  color_boton_property = "background-color: blue; color: white;";
  mensaje='';

  estado_checkbox: boolean = true;

  lanzar_mensaje(){
    /*this.mensaje='Hola a todos';
    let mensaje='caballo';
    alert(mensaje);*/

    if(this.color_boton_property=="background-color: blue; color: white;"){
      this.color_boton_property ="background-color: red; color: white;";
    }else{
      this.color_boton_property ="background-color: blue; color: white;";
    }
  }

  getEdad(){
    return this.edad;
  }

  set_empresa(empresa: string){}

  cambiar_registro(){
    this.usuario_registrado_property=!this.usuario_registrado_property;
  }

  set_usuario_registrado(event:Event){
    //alert('El usuario se ha registrado');
    //this.texto_registro = 'El usuario se acaba de registrar';
    //console.log(event.target);
    if((<HTMLInputElement>event.target).value=='si'){
      this.texto_registro = 'El usuario se acaba de registrar';
    }else{
      this.texto_registro = 'No hay nadie registrado';
    }
  }

  cambiar_empresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }
}