import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-list-especialidad',
  templateUrl: './list-especialidad.component.html',
  styleUrls: ['./list-especialidad.component.css']
})
export class ListEspecialidadComponent {
  listEspecialidad: Especialidad[] = [];
  filterPost = ''

  constructor(private _especialidadService: EspecialidadService) {}

  ngOnInit(): void {
    this.getListEspecialidades();
  }
  getListEspecialidades() {
    this._especialidadService.getListEspecialidades().subscribe((data) => {
      this.listEspecialidad = data;
    });
  }
  deleteEspecialidad(id: string) {
    console.log(id);
    this._especialidadService.deleteEspecialidad(id).subscribe(() => {
      this.getListEspecialidades();
    });
  }
}
