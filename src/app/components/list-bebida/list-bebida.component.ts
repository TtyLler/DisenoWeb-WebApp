import { Component } from '@angular/core';
import { Bebida } from 'src/app/interfaces/bebida';
import { BebidaService } from 'src/app/services/bebida.service'; 
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-bebida',
  templateUrl: './list-bebida.component.html',
  styleUrls: ['./list-bebida.component.css']
})
export class ListBebidaComponent {
  listBebida: Bebida[] = [];
  filterPost = ''
  constructor(private _bebidaService: BebidaService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListBebidas();
  }
  getListBebidas() {
    this._bebidaService.getListBebidas().subscribe((data) => {
      this.listBebida = data;
    });
  }
  deleteBebida(id: string) {
    console.log(id);
    this._bebidaService.deleteBebida(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Bebida`)).subscribe()
      this.getListBebidas();
    });
  }
}
