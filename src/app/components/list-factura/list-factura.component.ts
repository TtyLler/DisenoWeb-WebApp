import { Component } from '@angular/core';
import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-list-factura',
  templateUrl: './list-factura.component.html',
  styleUrls: ['./list-factura.component.css']
})
export class ListFacturaComponent {
  listFactura: Factura[] = [];
  filterPost = ''
  test = 'Test'
  sumaTotal: number = 0


  constructor(private _facturaService: FacturaService) {}

  ngOnInit(): void {
    this.getListFacturas();
  }
  getListFacturas() {
    this._facturaService.getListFacturas().subscribe((data) => {
      this.listFactura = data;
      this.listFactura.forEach((item) => {
      this.sumaTotal = this.sumaTotal + item.EntradaDeDinero
      console.log(this.sumaTotal)
    })
    });
  }
  deleteFactura(id: string) {
    console.log(id);
    this._facturaService.deleteFactura(id).subscribe(() => {
      this.getListFacturas();
    });
  }
    
  total: number = 0;
  calculateTotal() {
    this.total = this.listFactura.reduce((total, item) => {
      return total;
    }, 0);
  }
}


