import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desechable } from '../interfaces/desechable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesechableService {

  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'desechables/'
  }

  getListDesechables(): Observable<Desechable[]>{
    return this.http.get<Desechable[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteDesechable (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveDesechable(desechable:Desechable): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, desechable)
  }
  getOneDesechable(id: string): Observable<Desechable>{
    return this.http.get<Desechable>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateDesechable(id:string, desechable:Desechable): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, desechable)
  }
}





