import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent {
  listEmpleados: Empleado[] = [];
  filterPost = ''

  constructor(private _empleadoService: EmpleadoService,private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

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
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Empleado`)).subscribe()
      this.getListEmpleados();
    });
  }
}
