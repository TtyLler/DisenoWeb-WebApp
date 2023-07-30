import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent {
  listEmpleados: Empleado[] = [];
  filterPost = ''

  constructor(private _empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.getListEmpleados();
  }
  getListEmpleados() {
    this._empleadoService.getListEmpleados().subscribe((data) => {
      this.listEmpleados = data;
    });
  }
  deleteEmpleado(id: string) {
    console.log(id);
    this._empleadoService.deleteEmpleado(id).subscribe(() => {
      this.getListEmpleados();
    });
  }
}
