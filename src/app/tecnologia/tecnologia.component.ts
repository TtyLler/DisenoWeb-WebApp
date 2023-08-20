import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent {
  listTecnologia: Tecnologia[] = [];
  filterPost = '';
  constructor(private _tecnologiaService: TecnologiaService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListTecnologias();
  }
  getListTecnologias() {
    this._tecnologiaService.getListTecnologias().subscribe((data) => {
      this.listTecnologia = data;
    });
  }
  deleteTecnologia(id: string) {
    console.log(id);
    this._tecnologiaService.deleteTecnologia(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Tecnologia`)).subscribe()
      this.getListTecnologias();
    });
  }
}

