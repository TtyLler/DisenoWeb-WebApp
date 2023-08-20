import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-especialidad',
  templateUrl: './list-especialidad.component.html',
  styleUrls: ['./list-especialidad.component.css']
})
export class ListEspecialidadComponent {
  listEspecialidad: Especialidad[] = [];
  filterPost = ''

  constructor(private _especialidadService: EspecialidadService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

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
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Especialidad`)).subscribe()
      this.getListEspecialidades();
    });
  }
}
