import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Usuarios } from '../interface/usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuarios = {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
    support: {
      url: '',
      text: ''
    }
  }


  constructor(private usuarioServicio: UsersService) { }

  ngOnInit(): void {
    this.usuarioServicio.getUsuario().subscribe(data => {
      this.usuario = data;
      console.log(this.usuario.data)
    })
  }
}
