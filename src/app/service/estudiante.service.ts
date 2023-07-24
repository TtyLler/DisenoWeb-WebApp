import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante,EstudianteNuevo } from '../interface/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  Url:string='http://localhost:8085/person'
  httpOptions={
    headers:{
      'Content-Type':'application/json'
    }
  }
  constructor(private http:HttpClient) { }
  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.Url);
  }
  addEstudiante(estudiante:EstudianteNuevo):Observable<EstudianteNuevo>{
    return this.http.post<EstudianteNuevo>(this.Url,estudiante,this.httpOptions)
  }
}
