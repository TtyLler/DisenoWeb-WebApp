import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _loginService: LoginService) {}
  intercept (req:any, next:any){
    const token = localStorage.getItem('token')
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokenizeReq)
  }

  
}
