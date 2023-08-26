import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/interfaces/bitacora';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-bitacora',
  templateUrl: './add-edit-bitacora.component.html',
  styleUrls: ['./add-edit-bitacora.component.css']
})
export class AddEditBitacoraComponent {
  formBitacora: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _bitacoraService: BitacoraService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formBitacora = this.fb.group({
      CodigoRegistro: ['', Validators.required],
      Usuario: ['', Validators.required],
      FechaHora: ['', Validators.required],
      Descripcion: ['', Validators.required],
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneBitacora(this.id)
  }

  getOneBitacora(id: string){
    this._bitacoraService.getOneBitacora(id).subscribe((data: Bitacora) => {
      this.formBitacora.patchValue({
        CodigoRegistro: data.CodigoRegistro,
        Usuario: data.Usuario,
        FechaHora: data.FechaHora,
        Descripcion: data.Descripcion
      })
    })
  }

  addBitacora(){
    const bitacora: Bitacora = {
      CodigoRegistro: this.formBitacora.value.CodigoRegistro,
      Usuario: this.formBitacora.value.Usuario,
      FechaHora: this.formBitacora.value.FechaHora,
      Descripcion: this.formBitacora.value.Descripcion,
      id: this.formBitacora.value.id
    }

    if(this.id != null){
      bitacora.id = this.id
      this._bitacoraService.updateBitacora(this.id, bitacora).subscribe(() => {
        this.router.navigate(['/listcaja'])
      })
    }else{
      this._bitacoraService.saveBitacora(bitacora).subscribe(() => {
        this.router.navigate(['/listcaja'])
      })
    }

    
  }
}
