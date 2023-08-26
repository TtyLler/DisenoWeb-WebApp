import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 
  listCart: Cart[] = [];
  filterPost = '';
  constructor(
    private _cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListCarts();
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 4000);
  }

  getListCarts() {
    this._cartService.getListCarts().subscribe((data) => {
      this.listCart = data;
    });
  }

  deleteCart(id: string) {
    console.log(id);
    this._cartService.deleteCart(id).subscribe(() => {
      this.getListCarts();
    });
  }
}
