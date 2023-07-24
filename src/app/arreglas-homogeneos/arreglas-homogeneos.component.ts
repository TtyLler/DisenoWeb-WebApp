import { Component } from '@angular/core';
import { Fruta } from '../interface/fruta';

@Component({
  selector: 'app-arreglas-homogeneos',
  templateUrl: './arreglas-homogeneos.component.html',
  styleUrls: ['./arreglas-homogeneos.component.css']
})
export class ArreglasHomogeneosComponent {
  frutas:Fruta[]=[{id:1,nombre:'sandia',precio:500,fechavencimiento:new Date('07/23/2023')},
  {id:2,nombre:'papaya',precio:400,fechavencimiento:new Date('08/01/2023')}]

}
