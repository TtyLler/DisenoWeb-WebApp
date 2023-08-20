import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bitacora } from '../interfaces/bitacora';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'bitacoras/'
  }

  getListBitacoras(): Observable<Bitacora[]>{
    return this.http.get<Bitacora[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteBitacora (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveBitacora(bitacora:Bitacora): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, bitacora)
  }
  getOneBitacora(id: string): Observable<Bitacora>{
    return this.http.get<Bitacora>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateBitacora(id:string, bitacora:Bitacora): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, bitacora)
  }
}
