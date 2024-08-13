import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoFeoComponent } from "./empleado-feo/empleado-feo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadosComponent, EmpleadoFeoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ultimo ciclo';
  nombre = "Josué Mejía";
}
