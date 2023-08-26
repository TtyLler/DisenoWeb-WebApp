import { Component } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-mesa',
  templateUrl: './list-mesa.component.html',
  styleUrls: ['./list-mesa.component.css']
})
export class ListMesaComponent {
  listMesa: Mesa[] = [];
  filterPost = ''
  constructor(private _mesaService: MesaService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListMesas();
  }
  getListMesas() {
    this._mesaService.getListMesas().subscribe((data) => {
      this.listMesa = data;
    });
  }
  deleteMesa(id: string) {
    console.log(id);
    this._mesaService.deleteMesa(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Mesa`)).subscribe()
      this.getListMesas();
    });
  }
}
