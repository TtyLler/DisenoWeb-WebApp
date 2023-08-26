import { Component } from '@angular/core';
import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private _facturaService: FacturaService, private _bitacoraService: BitacoraService, private _loginService: LoginService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListFacturas();
  }
  getListFacturas() {
    this._facturaService.getListFacturas().subscribe((data) => {
      this.listFactura = data.filter(item => new Date(item.FechaHoraFactura).toISOString().toLocaleString().split('T')[0] == new Date().toISOString().toLocaleString().split('T')[0])
      console.log(new Date().toISOString().toLocaleString().split('T')[0])
      this.sumaTotal = 0
      this.listFactura.forEach((item) => {
      this.sumaTotal = this.sumaTotal + item.EntradaDeDinero
    })
    });
  }
  deleteFactura(id: string) {
    console.log(id);
    this._facturaService.deleteFactura(id).subscribe(() => {
      this.getListFacturas();
    });
  }
   cierreCaja(){
    this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`Cierre de caja con un monto de: ₡${this.sumaTotal}`)).subscribe()
    alert("Cierre de caja realizado")
  }   
}


