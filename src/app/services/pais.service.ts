import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'paises/'  //hace el link con las routes de backend en el codigo
  }

  getListPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deletePais (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  savePais(pais:Pais): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, pais)
  }
  getOnePais(id: string): Observable<Pais>{
    return this.http.get<Pais>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updatePais(id:string, pais:Pais): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, pais)
  }
}
