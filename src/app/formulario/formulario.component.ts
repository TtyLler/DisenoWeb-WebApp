import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre:string = 'Esteban';
  apellido:string='Pineda';
  resultado:string='';

  concatenarNombre(){
    this.resultado=  this.nombre+' '+this.apellido
  }
}
