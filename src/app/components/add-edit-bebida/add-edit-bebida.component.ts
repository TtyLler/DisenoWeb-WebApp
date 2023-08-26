import { Component } from '@angular/core';
import { Bebida } from 'src/app/interfaces/bebida';
import { BebidaService } from 'src/app/services/bebida.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-edit-bebida',
  templateUrl: './add-edit-bebida.component.html',
  styleUrls: ['./add-edit-bebida.component.css']
})
export class AddEditBebidaComponent {
  formBebida: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _bebidaService: BebidaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private _bitacoraService: BitacoraService, private _loginService: LoginService ){
    this.formBebida = this.fb.group({
      CodigoBebida: ['', Validators.required],
      TipoBebida: ['', Validators.required],
      Marca: ['', Validators.required],
      Precio: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      Pais: ['', Validators.required],
      CodigoMedida: ['', Validators.required],
      Ano: ['', Validators.required],
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneBebida(this.id)
  }

  getOneBebida(id: string){
    this._bebidaService.getOneBebida(id).subscribe((data: Bebida) => {
      this.formBebida.patchValue({
        CodigoBebida: data.CodigoBebida,
        TipoBebida: data.TipoBebida,
        Marca: data.Marca,
        Precio: data.Precio,
        CodigoRestaurante: data.CodigoRestaurante,
        Pais: data.Pais,
        CodigoMedida: data.CodigoMedida,
        Ano: data.Ano
      })
    })
  }

  addBebida(){
    const bebida: Bebida = {
      CodigoBebida: this.formBebida.value.CodigoBebida,
      TipoBebida: this.formBebida.value.TipoBebida,
      Marca: this.formBebida.value.Marca,
      Precio: this.formBebida.value.Precio,
      CodigoRestaurante: this.formBebida.value.CodigoRestaurante,
      Pais: this.formBebida.value.Pais,
      CodigoMedida: this.formBebida.value.CodigoMedida,
      Ano: this.formBebida.value.Ano,
      id: this.formBebida.value.id
    }

    if(this.id != null){
      bebida.id = this.id
      this._bebidaService.updateBebida(this.id, bebida).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Bebida`)).subscribe()
        this.router.navigate(['/listbebida'])
      })
    }else{
      this._bebidaService.saveBebida(bebida).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Bebida`)).subscribe()
        this.router.navigate(['/listbebida'])
      })
    }
  }
}
