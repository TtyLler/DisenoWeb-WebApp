import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup
  constructor(private router: Router, private fb: FormBuilder , private _loginService: LoginService){
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
        this.router.navigateByUrl('/home')
      }else {
        this.router.navigateByUrl('/login')
      }   
    })
  }
}
