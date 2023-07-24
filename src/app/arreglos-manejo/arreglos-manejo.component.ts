import { Component } from '@angular/core';
import { Persona } from '../interface/persona';
@Component({
  selector: 'app-arreglos-manejo',
  templateUrl: './arreglos-manejo.component.html',
  styleUrls: ['./arreglos-manejo.component.css']
})
export class ArreglosManejoComponent {

  personas:Persona[]=[];
  persona:Persona={
    id:0,
    nombre:'',
    apellido:'',
    correoElecrtonico:''
  };
  agregarPersona(){
    let copiar= JSON.parse(JSON.stringify(this.persona));
    this.personas.push(copiar)
  }
  removerPersona(){
    this.personas.pop()
  }
}
