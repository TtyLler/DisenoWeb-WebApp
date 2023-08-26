import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  listCart: Cart[] = [];
  filterPost = '';
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getListCarts();
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

