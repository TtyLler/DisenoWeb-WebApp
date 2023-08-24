import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  httpOptions ={
    headers: {
      'content-type': 'application/json'
    }
  }
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.appUrl = 'http://localhost:8181/'
    this.apiUrl = 'carts/'
  }

  getListCarts(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.appUrl}${this.apiUrl}`)
  }
  deleteCart(id:string): Observable<void>{
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`, this.httpOptions)
  }
  saveCart(cart:Cart): Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, cart)
  }
  getOneCart(id: string): Observable<Cart>{
    return this.http.get<Cart>(`${this.appUrl}${this.apiUrl}${id}`)
  }
  updateCart(id:string, cart:Cart): Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, cart)
  }
}
