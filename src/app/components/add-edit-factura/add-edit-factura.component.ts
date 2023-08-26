import { Component } from '@angular/core';
import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-edit-factura',
  templateUrl: './add-edit-factura.component.html',
  styleUrls: ['./add-edit-factura.component.css']
})
export class AddEditFacturaComponent {
  formFactura: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _facturaService: FacturaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private _bitacoraService: BitacoraService, private _loginService: LoginService ){
    this.formFactura = this.fb.group({
      FechaHoraFactura: ['', Validators.required],
      CodigoCaja: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      CodigoEmpleado: ['', Validators.required],
      EntradaDeDinero: ['', Validators.required],
      DescripcionFactura: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneFactura(this.id)
  }

  getOneFactura(id: string){
    this._facturaService.getOneFactura(id).subscribe((data: Factura) => {
      this.formFactura.patchValue({
        FechaHoraFactura: data.FechaHoraFactura,
        CodigoCaja: data.CodigoCaja,
        CodigoRestaurante: data.CodigoRestaurante,
        CodigoEmpleado: data.CodigoEmpleado,
        EntradaDeDinero: data.EntradaDeDinero,
        DescripcionFactura: data.DescripcionFactura
      })
    })
  }

  addFactura(){
    const factura: Factura = {
      FechaHoraFactura: this.formFactura.value.FechaHoraFactura,
      CodigoCaja: this.formFactura.value.CodigoCaja,
      CodigoRestaurante: this.formFactura.value.CodigoRestaurante,
      CodigoEmpleado: this.formFactura.value.CodigoEmpleado,
      EntradaDeDinero: this.formFactura.value.EntradaDeDinero,
      DescripcionFactura: this.formFactura.value.DescripcionFactura,
      id: this.formFactura.value.id
    }

    if(this.id != null){
      factura.id = this.id
      this._facturaService.updateFactura(this.id, factura).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Facturas`)).subscribe()
        this.router.navigate(['/listfactura'])
      })
    }else{
      this._facturaService.saveFactura(factura).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`Apertura de caja con un monto de: ₡${factura.EntradaDeDinero}`)).subscribe()
        this.router.navigate(['/listfactura'])
      })
    }

    
  }
}




