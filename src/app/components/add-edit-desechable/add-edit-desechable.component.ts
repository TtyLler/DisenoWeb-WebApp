import { Component, OnInit } from '@angular/core';
import { Desechable } from 'src/app/interfaces/desechable';
import { DesechableService } from 'src/app/services/desechable.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';

@Component({
  selector: 'app-add-edit-desechable',
  templateUrl: './add-edit-desechable.component.html',
  styleUrls: ['./add-edit-desechable.component.css']
})
export class AddEditDesechableComponent {
  formDesechable: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _desechableService: DesechableService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,private _loginService: LoginService, private _bitacoraService: BitacoraService ){
    this.formDesechable = this.fb.group({
      CodigoDesechable: ['', Validators.required],
      NombreDesechable: ['', Validators.required],
      CantidadDesechable: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneDesechable(this.id)
  }

  getOneDesechable(id: string){
    this._desechableService.getOneDesechable(id).subscribe((data: Desechable) => {
      this.formDesechable.patchValue({
        CodigoDesechable: data.CodigoDesechable,
        NombreDesechable: data.NombreDesechable,
        CantidadDesechable: data.CantidadDesechable,
        CodigoRestaurante: data.CodigoRestaurante
      })
    })
  }

  addDesechable(){
    const desechable: Desechable = {
      CodigoDesechable: this.formDesechable.value.CodigoDesechable,
      NombreDesechable: this.formDesechable.value.NombreDesechable,
      CantidadDesechable: this.formDesechable.value.CantidadDesechable,
      CodigoRestaurante: this.formDesechable.value.CodigoRestaurante,
      id: this.formDesechable.value.id
    }

    if(this.id != null){
      desechable.id = this.id
      this._desechableService.updateDesechable(this.id, desechable).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Desechable`)).subscribe()
        this.router.navigate(['/listdesechable'])
      })
    }else{
      this._desechableService.saveDesechable(desechable).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Desechable`)).subscribe()
        this.router.navigate(['/listdesechable'])
      })
    }

    
  }
}

