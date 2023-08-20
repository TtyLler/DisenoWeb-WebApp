import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../interfaces/login';
import { BitacoraService } from '../services/bitacora.service';
import { generateBitacora } from '../utils/generatebitacora';
import { DESCRIPTION_TYPES } from '../constants/description.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup
  constructor(private router: Router, private fb: FormBuilder , private _loginService: LoginService, private _bitacoraService: BitacoraService){
    this.formLogin = this.fb.group({
      NombreUsuario: ['', Validators.required],
      Contrasena: ['', Validators.required]
    }) 
  }

  iniciarSesion(){
    const user: Login = {
      NombreUsuario: this.formLogin.value.NombreUsuario,
      Contrasena: this.formLogin.value.Contrasena
    }
    this._loginService.loginUser(user).subscribe((data) => {
      if(data.token !== null){
        localStorage.setItem('token',data.token)
        localStorage.setItem('Rol',data.Rol)
        localStorage.setItem('user',data.NombreUsuario)

        if(data.Rol === 'Admin'){
          this._bitacoraService.saveBitacora(generateBitacora(data.NombreUsuario.toString(), `${data.NombreUsuario.toString()}${DESCRIPTION_TYPES.LOGIN}`)).subscribe((data) => {
            console.log(data)
          })
        }
        this.router.navigateByUrl('/home')
      }else {
        this.router.navigateByUrl('/login')
      }   
    })
  }
}
