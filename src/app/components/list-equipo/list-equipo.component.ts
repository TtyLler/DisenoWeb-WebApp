import { Component } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css']
})
export class ListEquipoComponent {
  listEquipo: Equipo[] = [];
  filterPost = ''
  constructor(private _equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getListEquipos();
  }
  getListEquipos() {
    this._equipoService.getListEquipos().subscribe((data) => {
      this.listEquipo = data;
    });
  }
  deleteEquipo(id: string) {
    console.log(id);
    this._equipoService.deleteEquipo(id).subscribe(() => {
      this.getListEquipos();
    });
  }
}
