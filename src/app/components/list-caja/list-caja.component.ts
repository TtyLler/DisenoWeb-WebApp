import { Component } from '@angular/core';
import { Caja } from 'src/app/interfaces/caja';
import { CajaService } from 'src/app/services/caja.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-caja',
  templateUrl: './list-caja.component.html',
  styleUrls: ['./list-caja.component.css']
})
export class ListCajaComponent {
  listCaja: Caja[] = [];
  filterPost = ''
  constructor(private _cajaService: CajaService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListCajas();
  }
  getListCajas() {
    this._cajaService.getListCajas().subscribe((data) => {
      this.listCaja = data;
    });
  }
  deleteCaja(id: string) {
    console.log(id);
    this._cajaService.deleteCaja(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Caja`)).subscribe()
      this.getListCajas();
    });
  }
}
