import { Component } from '@angular/core';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent {
  contacto = {
    nombre: 'Cristian Flores',
    email: 'invitado@gmail.com'
  }

  imagen_ruta='';
 
}
