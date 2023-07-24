import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../service/estudiante.service';
import { EstudianteNuevo } from '../interface/estudiante';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.component.html',
  styleUrls: ['./nuevoestudiante.component.css']
})
export class NuevoestudianteComponent implements OnInit {
  identify: string = ''
  fullName: string = ''
  email: string = ''
  constructor(private estudianteServicio: EstudianteService,private router: Router) { }
  ngOnInit(): void {

  }

  onSubmit() {
    let estudiante: EstudianteNuevo = {      
      identify: this.identify,
      fullName: this.fullName,
      email: this.email
    }
    this.estudianteServicio.addEstudiante(estudiante).subscribe(i => {
      this.router.navigate(['/estudiantes'])      
    })
  }

}
