import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'equipos/'
  }

  getListEquipos(): Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteEquipo (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveEquipo(equipo:Equipo): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, equipo)
  }
  getOneEquipo(id: string): Observable<Equipo>{
    return this.http.get<Equipo>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateEquipo(id:string, equipo:Equipo): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, equipo)
  }
}
