import { Component, OnInit } from '@angular/core';
import { Caja } from 'src/app/interfaces/caja';
import { CajaService } from 'src/app/services/caja.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-caja',
  templateUrl: './add-edit-caja.component.html',
  styleUrls: ['./add-edit-caja.component.css']
})
export class AddEditCajaComponent {
  formCaja: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _cajaService: CajaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formCaja = this.fb.group({
      CodigoCaja: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      CodigoEmpleado: ['', Validators.required],
      Descripcion: ['', Validators.required],
      EntradaDeDinero: ['', Validators.required],
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneCaja(this.id)
  }

  getOneCaja(id: string){
    this._cajaService.getOneCaja(id).subscribe((data: Caja) => {
      this.formCaja.patchValue({
        CodigoCaja: data.CodigoCaja,
        CodigoRestaurante: data.CodigoRestaurante,
        CodigoEmpleado: data.CodigoEmpleado,
        Descripcion: data.Descripcion,
        EntradaDeDinero: data.EntradaDeDinero
      })
    })
  }

  addCaja(){
    const caja: Caja = {
      CodigoCaja: this.formCaja.value.CodigoCaja,
      CodigoRestaurante: this.formCaja.value.CodigoRestaurante,
      CodigoEmpleado: this.formCaja.value.CodigoEmpleado,
      Descripcion: this.formCaja.value.Descripcion,
      EntradaDeDinero: this.formCaja.value.EntradaDeDinero,
      id: this.formCaja.value.id
    }

    if(this.id != null){
      caja.id = this.id
      this._cajaService.updateCaja(this.id, caja).subscribe(() => {
        this.router.navigate(['/listcaja'])
      })
    }else{
      this._cajaService.saveCaja(caja).subscribe(() => {
        this.router.navigate(['/listcaja'])
      })
    }

    
  }
}
