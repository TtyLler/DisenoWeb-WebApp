import { Component, OnInit } from '@angular/core';
import { Limpieza } from 'src/app/interfaces/Limpieza';
import { LimpiezaService } from 'src/app/services/limpieza.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-limpieza',
  templateUrl: './add-limpieza.component.html',
  styleUrls: ['./add-limpieza.component.css']
})
export class AddLimpiezaComponent {
  formLimpieza: FormGroup;
  id: any;
  operacion: string = "Agregar "
  constructor(private _limpiezaService: LimpiezaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,private _loginService: LoginService, private _bitacoraService: BitacoraService ){
    this.formLimpieza = this.fb.group({
      CodigoLimpieza: ['', Validators.required],
      NombreLimpieza: ['', Validators.required],
      CantidadLimp: ['', Validators.required],
      RestauranteLimp: ['', Validators.required],       }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar'
    }
    this.getOneLimpieza(this.id)
  }

  getOneLimpieza(id: string){
    this._limpiezaService.getOneLimpieza(id).subscribe((data: Limpieza) => {
      this.formLimpieza.patchValue({
        CodigoLimpieza: data.CodigoLimpieza,
        NombreLimpieza: data.NombreLimpieza,
        CantidadLimp: data.CantidadLimp,
        RestauranteLimp: data.RestauranteLimp,
     
      })
    })
  }

  addLimpieza(){
    const limpieza: Limpieza = {
      CodigoLimpieza: this.formLimpieza.value.CodigoLimpieza,
      NombreLimpieza: this.formLimpieza.value.NombreLimpieza,
      CantidadLimp: this.formLimpieza.value.CantidadLimp,
      RestauranteLimp: this.formLimpieza.value.RestauranteLimp,
      id: this.formLimpieza.value.id
    }

    if(this.id != null){
      limpieza.id = this.id
      this._limpiezaService.updateLimpieza(this.id, limpieza).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Limpieza`)).subscribe()
        this.router.navigate(['/limpiesa-higiene'])
      })
    }else{
      this._limpiezaService.saveLimpieza(limpieza).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Limpieza`)).subscribe()
        this.router.navigate(['/limpiesa-higiene']);
      })
    }
  }
}
