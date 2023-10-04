import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado:string = ''
  edad:number = 0;

  getEdad(){
    return this.edad;
  }

  EditEmpleado(empleado:string){
    this.empleado = empleado;
  }

  editEdad(newEdad:any){
    this.edad = newEdad;
  }
}
