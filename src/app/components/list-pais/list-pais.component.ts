import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais';
import { PaisService } from 'src/app/services/pais.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';


@Component({
  selector: 'app-list-pais',
  templateUrl: './list-pais.component.html',
  styleUrls: ['./list-pais.component.css']
})
export class ListPaisComponent {
  listPaises: Pais[] = [];
  filterPost = ''

  constructor(private _paisService: PaisService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListPaises();
  }
  getListPaises() {
    this._paisService.getListPaises().subscribe((data) => {
      this.listPaises = data;
    });
  }
  deletePais(id: string) {
    this._paisService.deletePais(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Pais`)).subscribe()
      this.getListPaises();
    });
  }
}
