import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caja } from '../interfaces/caja';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'cajas/'
  }

  getListCajas(): Observable<Caja[]>{
    return this.http.get<Caja[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteCaja(id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveCaja(caja:Caja): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, caja)
  }
  getOneCaja(id: string): Observable<Caja>{
    return this.http.get<Caja>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateCaja(id:string, caja:Caja): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, caja)
  }
}
