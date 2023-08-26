import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-tecnologia',
  templateUrl: './add-tecnologia.component.html',
  styleUrls: ['./add-tecnologia.component.css']
})
export class AddTecnologiaComponent {
  formTecnologia: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _tecnologiaService: TecnologiaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,private _loginService: LoginService, private _bitacoraService: BitacoraService) {
    this.formTecnologia = this.fb.group({
      CodigoTec: ['', Validators.required],
      RestauranteTec: ['', Validators.required],
      NombreTec: ['', Validators.required],
      MarcaTec: ['', Validators.required],
      CantidadTec: ['', Validators.required],
      DescripcionTec: ['', Validators.required],

    })

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.operacion = 'Editar '
    }
    this.getOneTecnologia(this.id)
  }

  getOneTecnologia(id: string) {
    this._tecnologiaService.getOneTecnologia(id).subscribe((data: Tecnologia) => {
      this.formTecnologia.patchValue({
        CodigoTec: data.CodigoTec,
        RestauranteTec: data.RestauranteTec,
        NombreTec: data.NombreTec,
        MarcaTec: data.MarcaTec,
        CantidadTec: data.CantidadTec,
        DescripcionTec: data.DescripcionTec,
      })
    })
  }

  addTecnologia() {
    const tecnologia: Tecnologia = {
      CodigoTec: this.formTecnologia.value.CodigoTec,
      RestauranteTec: this.formTecnologia.value.RestauranteTec,
      NombreTec: this.formTecnologia.value.NombreTec,
      MarcaTec: this.formTecnologia.value.MarcaTec,
      CantidadTec: this.formTecnologia.value.CantidadTec,
      DescripcionTec: this.formTecnologia.value.DescripcionTec,
      id: this.formTecnologia.value.id
    }

    if (this.id != null) {
      tecnologia.id = this.id
      this._tecnologiaService.updateTecnologia(this.id, tecnologia).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Tecnologia`)).subscribe()
        this.router.navigate(['/tecnologia'])
      })
    } else {
      this._tecnologiaService.saveTecnologia(tecnologia).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Tecnologia`)).subscribe()
        this.router.navigate(['/tecnologia'])
      })
    }
  }
}

