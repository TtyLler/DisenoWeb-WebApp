import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  constructor(private _loginService: LoginService){}

  
  loggedIn(): boolean{
    return this._loginService.loggedIn()
  }

  logoutUser(){
    this._loginService.logoutUser()
  }


  getRol(){
    return this._loginService.getRol()?.toString()
  }
  
}
