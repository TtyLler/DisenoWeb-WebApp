import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Food } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class AddFoodComponent implements OnInit {
  formFood: FormGroup;
  mesa: any;
  id: any;
  operacion: string = "Agregar ";
  listCart: Cart[] = [];

  constructor(
    private _foodService: FoodService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _cartService: CartService,

  ) {
    this.formFood = this.fb.group({
      
      NombreProductoCart: ['', Validators.required],
      CantidadCart: ['', Validators.required],
      MesaCart: ['', Validators.required],
      PrecioCart: ['', Validators.required],
    });

    this.id = aRouter.snapshot.paramMap.get('id');
    
  }


  ngOnInit(): void {

    
    this.mesa = this.aRouter.snapshot.params['mesa'];
    if (this.id != null) {
      this.getOneFood(this.id);

    }
    this.getListCarts();
  }

  getOneFood(id: string) {
    this._foodService.getOneFood(id).subscribe((data: Food) => {
      this.formFood.patchValue({
  
        NombreProductoCart: data.NombreProductoCart,
        CantidadCart: data.CantidadCart,
        MesaCart: data.MesaCart,
        PrecioCart: data.PrecioCart

      });
    });
  }
  redireccionar() {
    const navigationExtras: NavigationExtras = {
      fragment: 'food'
    };

  }

  addFood(nombreProducto: string, precio: number, mesa: any, cantidad: number) {
    const food: Food = {
      NombreProductoCart: nombreProducto,
      CantidadCart: cantidad,
      MesaCart: mesa,
      PrecioCart: precio,
      id: ''
    };
  
    console.log(food);
    this._cartService.saveCart(food).subscribe(() => {
      this.router.navigate(['/food', mesa]);
      window.location.reload();
    });
  }

  deleteCart(id: string) {
    console.log(id);
    this._cartService.deleteCart(id).subscribe(() => {
      this.getListCarts();
    });
  }

  getListCarts() {
    this._cartService.getListCarts().subscribe((data) => {
      console.log(data); 
      this.listCart = data.filter((item) => item.MesaCart === Number(this.mesa));
      this.calculateTotal();
    });
  }
  total: number = 0;
  calculateTotal() {
    this.total = this.listCart.reduce((total, item) => {
      return total + (item.PrecioCart * item.CantidadCart);
    }, 0);
  }

  facturar() {
    // Lógica 

    
    const mensaje = document.getElementById('mensaje');
    if (mensaje) {
      mensaje.style.display = 'block';
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 4000); 
    }
  }


}