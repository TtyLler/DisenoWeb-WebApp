import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bebida } from '../interfaces/bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'bebidas/'
  }

  getListBebidas(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteBebida (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveBebida(bebida:any): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, bebida)
  }
  getOneBebida(id: string): Observable<Bebida>{
    return this.http.get<Bebida>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateBebida(id:string, bebida:Bebida): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, bebida)
  }
}
