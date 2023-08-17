import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interfaces/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'tecnologias/'
  }

  getListTecnologias(): Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteTecnologia (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveTecnologia(tecnologia:Tecnologia): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, tecnologia)
  }
  getOneTecnologia(id: string): Observable<Tecnologia>{
    return this.http.get<Tecnologia>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateTecnologia(id:string, tecnologia:Tecnologia): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, tecnologia)
  }
}
