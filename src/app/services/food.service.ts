import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'food/'
  }

  getListFoods(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteFood (id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveFood(food:Food): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, food)
  }
  getOneFood(id: string): Observable<Food>{
    return this.http.get<Food>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateFood(id:string, food:Food): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, food)
  }
}
