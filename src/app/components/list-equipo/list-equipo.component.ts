import { Component } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css']
})
export class ListEquipoComponent {
  listEquipo: Equipo[] = [];
  filterPost = ''
  constructor(private _equipoService: EquipoService,private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

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
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Equipo`)).subscribe()
      this.getListEquipos();
    });
  }
}
