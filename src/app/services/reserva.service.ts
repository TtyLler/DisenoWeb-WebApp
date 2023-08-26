import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../interfaces/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  private secondaryApiUrL: string
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'reservas/'  //hace el link con las routes de backend en el codigo
    this.secondaryApiUrL = 'http://localhost:8181/reservasuser/'
  }

  getListReservas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteReserva (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveReserva(reserva:Reserva): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, reserva)
  }
  getOneReserva(id: string): Observable<Reserva>{
    return this.http.get<Reserva>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateReserva(id:string, reserva:Reserva): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, reserva)
  }
  userReserva(id:string): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.secondaryApiUrL}${id}`)
  }
}
