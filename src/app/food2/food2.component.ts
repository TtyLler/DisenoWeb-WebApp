import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Food } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { Factura } from '../interfaces/factura';
import { FacturaService } from '../services/factura.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-food2',
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.css']
})
export class AddFood2Component implements OnInit {
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
    private _facturaService: FacturaService


  ) {
    this.formFood = this.fb.group({
      NombreProductoCart: ['', Validators.required],
      CantidadCart: ['', Validators.required],
      MesaCart: ['', Validators.required],
      PrecioCart: ['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');
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
      fragment: 'food2'
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
      this.router.navigate(['/food2', mesa]);
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
    const currentDate = new Date();
    const food: Food = {
      NombreProductoCart: this.formFood.value.NombreProductoCart,
      CantidadCart: this.formFood.value.CantidadCart,
      MesaCart: this.formFood.value.MesaCart,
      PrecioCart: this.formFood.value.PrecioCart,
      id: ''
    };

    const queryParams = {
      ...food,
      FechaHoraFactura: currentDate.toISOString()
    };
    
    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/facturas'], navigationExtras);
  }

  facturar1() {
  const currentDate = new Date();

  const formattedDate = formatDate(currentDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');

  const factura: Factura = {
    FechaHoraFactura: new Date(formattedDate), 
    CodigoCaja: 2,
    CodigoRestaurante: 1,
    CodigoEmpleado: 1343,
    EntradaDeDinero: this.total,
    DescripcionFactura: "Pedido de la barra numero: " + this.mesa,
    id: ''
  };


  this._facturaService.saveFactura(factura).subscribe(
    (result) => {
      console.log('Factura creada:', result);
      const navigationExtras: NavigationExtras = {
    
      };
  
      this.router.navigate(['/cart'], navigationExtras);
  
    },
    (error) => {
      console.error('Error al crear factura:', error);
    }
    
    
  );
}

  
}