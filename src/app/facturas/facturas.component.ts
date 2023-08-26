import { Component } from '@angular/core';
import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';

@Component({
  selector: 'app-factura',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturaComponent {
  listFactura: Factura[] = [];
  filteredDate: Date = new Date();
  filteredFacturas: Factura[] = [];
  total: number = 0;

  constructor(
    private _facturaService: FacturaService,
    private _loginService: LoginService,
    private _bitacoraService: BitacoraService
  ) {}

  ngOnInit(): void {
    this.getListFacturas();
  }

  onDateFilterChange() {
    this.getListFacturas();
  }

  getListFacturas() {
    this._facturaService.getListFacturas().subscribe((data) => {
      this.listFactura = data;

  
      if (this.filteredDate) {
        this.filteredFacturas = this.listFactura.filter(item => {
          return new Date(item.FechaHoraFactura).toDateString() === this.filteredDate.toDateString();
        });
      } else {
        this.filteredFacturas = this.listFactura; 
      }

      this.calculateTotal();
    });
  }

  deleteFactura(id: string) {
    console.log(id);
    this._facturaService.deleteFactura(id).subscribe(() => {
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Factura`)).subscribe();
      this.getListFacturas();
    });
  }

  calculateTotal() {
    this.total = this.filteredFacturas.reduce((total, item) => {
      return total + item.EntradaDeDinero;
    }, 0);
  }

  
}
