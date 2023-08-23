import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login'; 
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'signin'
  }

  loginUser(user:Login): Observable<any>{
    return this.http.post<any>(`${this.appUrl}${this.apiUrl}`, user)
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('Rol')
    localStorage.removeItem('user')
    localStorage.removeItem('name')
    this.router.navigate(['/home'])
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
  getUser(){
    return localStorage.getItem('user')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getName(){
    return localStorage.getItem('name')
  }

  getRol(){
    return localStorage.getItem('Rol')
  }

}
