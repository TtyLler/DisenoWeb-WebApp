import { Especialidad } from './../interfaces/especialidad';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'especiales/'
  }

  getListEspecialidades(): Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteEspecialidad (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveEspecialidad(especialidad:Especialidad): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, especialidad)
  }
  getOneEspecialidad(id: string): Observable<Especialidad>{
    return this.http.get<Especialidad>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateEspecialidad(id:string, especialidad:Especialidad): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, especialidad)
  }
}
