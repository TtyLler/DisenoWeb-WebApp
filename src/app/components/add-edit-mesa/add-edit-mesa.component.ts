import { Component } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-edit-mesa',
  templateUrl: './add-edit-mesa.component.html',
  styleUrls: ['./add-edit-mesa.component.css']
})
export class AddEditMesaComponent {
  formMesa: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _mesaService: MesaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,private _loginService: LoginService, private _bitacoraService: BitacoraService ){
    this.formMesa = this.fb.group({
      CodigoMesa: ['', Validators.required],
      NombreMesa: ['', Validators.required],
      NumeroMesa: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      CantidadSillasMesa: ['', Validators.required],
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneMesa(this.id)
  }

  getOneMesa(id: string){
    this._mesaService.getOneMesa(id).subscribe((data: Mesa) => {
      this.formMesa.patchValue({
        CodigoMesa: data.CodigoMesa,
        NombreMesa: data.NombreMesa,
        NumeroMesa: data.NumeroMesa,
        CodigoRestaurante: data.CodigoRestaurante,
        CantidadSillasMesa: data.CantidadSillasMesa
      })
    })
  }

  addMesa(){
    const mesa: Mesa = {
      CodigoMesa: this.formMesa.value.CodigoMesa,
      NombreMesa: this.formMesa.value.NombreMesa,
      NumeroMesa: this.formMesa.value.NumeroMesa,
      CantidadSillasMesa: this.formMesa.value.CantidadSillasMesa,
      CodigoRestaurante: this.formMesa.value.CodigoRestaurante,
      id: this.formMesa.value.id
    }

    if(this.id != null){
      mesa.id = this.id
      this._mesaService.updateMesa(this.id, mesa).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Mesa`)).subscribe()
        this.router.navigate(['/listmesa'])
      })
    }else{
      this._mesaService.saveMesa(mesa).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Mesa`)).subscribe()
        this.router.navigate(['/listmesa'])
      })
    }
  }
}
