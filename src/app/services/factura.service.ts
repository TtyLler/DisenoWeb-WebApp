import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../interfaces/factura';
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
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'facturas/'
  }

  getListFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(`${this.appUrl}${this.apiUrl}`)
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
