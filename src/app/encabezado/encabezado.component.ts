import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { BitacoraService } from '../services/bitacora.service';
import { DESCRIPTION_TYPES } from '../constants/description.constants';
import { generateBitacora } from '../utils/generatebitacora';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  constructor(private _loginService: LoginService, private _bitacoraService: BitacoraService){}

  
  loggedIn(): boolean{
    return this._loginService.loggedIn()
  }

  logoutUser(){
    this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${this._loginService.getUser()}${DESCRIPTION_TYPES.LOGOUT}`)).subscribe()
    this._loginService.logoutUser()
  }


  getRol(){
    return this._loginService.getRol()?.toString()
  }
  
}
