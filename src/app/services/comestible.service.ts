import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comestible } from '../interfaces/comestible';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComestibleService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'comestibles/'
  }

  getListComestibles(): Observable<Comestible[]>{
    return this.http.get<Comestible[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteComestible (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveComestible(comestible:Comestible): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, comestible)
  }
  getOneComestible(id: string): Observable<Comestible>{
    return this.http.get<Comestible>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateComestible(id:string, comestible:Comestible): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, comestible)
  }
}
