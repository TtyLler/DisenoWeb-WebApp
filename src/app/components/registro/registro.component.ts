import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { Registro } from 'src/app/interfaces/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formRegistro: FormGroup
  constructor(private _registroService: RegistroService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute){
    this.formRegistro = this.fb.group({
      NombreUsuario: ['', Validators.required],
      Contrasena: ['', Validators.required]
    }) 
  }

  registro(){
    const user: Registro = {
      Contrasena: this.formRegistro.value.Contrasena,
      NombreUsuario: this.formRegistro.value.NombreUsuario,
    }
    console.log(user)
    this._registroService.registerUser(user).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
