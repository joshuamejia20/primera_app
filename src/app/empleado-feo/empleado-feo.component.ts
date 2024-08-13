import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-feo',
  standalone: true,
  imports: [],
  template: `
    <p>
      empleado-feo funciona!
    </p>
  `,
  styles: `p{
    color: purple;
  }`
})
export class EmpleadoFeoComponent {

}
