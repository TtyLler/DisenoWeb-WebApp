import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../service/estudiante.service';
import { Estudiante } from '../interface/estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiante:Estudiante[]=[]
  constructor(private estudianteServicio: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteServicio.getEstudiantes().subscribe(data => {
      this.estudiante = data;
      console.log(this.estudiante)
    })
  }
}
