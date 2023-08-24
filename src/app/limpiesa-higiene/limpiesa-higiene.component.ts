import { Component, OnInit} from '@angular/core';
import { Limpieza } from 'src/app/interfaces/Limpieza';
import { LimpiezaService } from 'src/app/services/limpieza.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-limpiesa-higiene',
  templateUrl: './limpiesa-higiene.component.html',
  styleUrls: ['./limpiesa-higiene.component.css']
})
export class LimpiesaHigieneComponent implements OnInit{
  listLimpieza: Limpieza[] = [];
  filterPost = '';

  constructor(private _limpiezaService: LimpiezaService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListLimpiezas();
  }

  getListLimpiezas() {
    this._limpiezaService.getListLimpiezas().subscribe((data) => {
      this.listLimpieza = data;
    });
  }

  deleteLimpieza(id: string) {
    this._limpiezaService.deleteLimpieza(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Limpieza`)).subscribe()
      this.getListLimpiezas();
    });
  }
}

  


