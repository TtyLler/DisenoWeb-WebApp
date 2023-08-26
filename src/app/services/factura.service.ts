import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  private urlSecondary: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'facturas/'
    this.urlSecondary = 'http://localhost:8181/todayfacturas' 
  }

  getListFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(`${this.appUrl}${this.apiUrl}`)
  }
  getListTodayFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.urlSecondary)
  }
  deleteFactura (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveFactura(factura:Factura): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, factura)
  }
  getOneFactura(id: string): Observable<Factura>{
    return this.http.get<Factura>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateFactura(id:string, factura:Factura): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, factura)
  }
}

