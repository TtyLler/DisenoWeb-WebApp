import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  
    this.facturas = [
      {
        mesa: 1,
        items: [
          { producto: 'Producto 1', precio: 20.00 },
          { producto: 'Producto 2', precio: 15.00 }
        ],
        total: 35.00
      },
      {
        mesa: 2,
        items: [
          { producto: 'Producto 1', precio: 10.00 },
          { producto: 'Producto 2', precio: 12.00 },
          { producto: 'Producto 3', precio: 8.00 }
        ],
        total: 30.00
      }
     
    ];
  }

  calcularImpuestos(factura: any): number {
  
    return factura.total * 0.13;
  }
}
