import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesa } from '../interfaces/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'mesas/'
  }

  getListMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteMesa (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveMesa(mesa:Mesa): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, mesa)
  }
  getOneMesa(id: string): Observable<Mesa>{
    return this.http.get<Mesa>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateMesa(id:string, mesa:Mesa): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, mesa)
  }
}
