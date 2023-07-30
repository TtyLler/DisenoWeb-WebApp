import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'empleados/'
  }

  getListEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteEmpleado (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveEmpleado(empleado:Empleado): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, empleado)
  }
  getOneEmpleado(id: string): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateEmpleado(id:string, empleado:Empleado): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, empleado)
  }
}
