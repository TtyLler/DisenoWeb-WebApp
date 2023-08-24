import { Component, OnInit } from '@angular/core';
import { Comestible } from 'src/app/interfaces/comestible';
import { ComestibleService } from 'src/app/services/comestible.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-comestible',
  templateUrl: './list-comestible.component.html',
  styleUrls: ['./list-comestible.component.css']
})
export class ListComestibleComponent {
  listComestible: Comestible[] = [];
  filterPost = ''

  constructor(private _comestibleService: ComestibleService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListComestibles();
  }
  getListComestibles() {
    this._comestibleService.getListComestibles().subscribe((data) => {
      this.listComestible = data;
    });
  }
  deleteComestible(id: string) {
    console.log(id);
    this._comestibleService.deleteComestible(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Comestible`)).subscribe()
      this.getListComestibles();
    });
  }

}






