import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'proveedor/'
  }

  getListProveedors(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteProveedor (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveProveedor(tecnologia:Proveedor): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, tecnologia)
  }
  getOneProveedor(id: string): Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateProveedor(id:string, tecnologia:Proveedor): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, tecnologia)
  }
}
