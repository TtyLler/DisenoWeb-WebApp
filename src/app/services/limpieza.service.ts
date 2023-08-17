import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Limpieza } from '../interfaces/Limpieza';

@Injectable({
  providedIn: 'root'
})
export class LimpiezaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'limpieza/'
  }

  getListLimpiezas(): Observable<Limpieza[]>{
    return this.http.get<Limpieza[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteLimpieza (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveLimpieza(limpieza:Limpieza): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, limpieza)
  }
  getOneLimpieza(id: string): Observable<Limpieza>{
    return this.http.get<Limpieza>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateLimpieza(id:string, limpieza:Limpieza): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, limpieza)
  }
  
}
