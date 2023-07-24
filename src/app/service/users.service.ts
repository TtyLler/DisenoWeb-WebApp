import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interface/usuarios';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url:string='https://reqres.in/api/users?page=1'
  httpOptions={
    headear:{
      'content-type':'application/json'
    }
  }
  constructor(private http:HttpClient) { }
  getUsuario():Observable<Usuarios>{
    return this.http.get<Usuarios>(this.Url);
  }
}
