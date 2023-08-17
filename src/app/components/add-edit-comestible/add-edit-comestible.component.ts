import { Component, OnInit } from '@angular/core';
import { Comestible } from 'src/app/interfaces/comestible';
import { ComestibleService } from 'src/app/services/comestible.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-comestible',
  templateUrl: './add-edit-comestible.component.html',
  styleUrls: ['./add-edit-comestible.component.css']
})
export class AddEditComestibleComponent {
  formComestible: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _comestibleService: ComestibleService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formComestible = this.fb.group({
      CodigoComestible: ['', Validators.required],
      DescripcionComestible: ['', Validators.required],
      CantidadComestible: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      TipoComestible: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneComestible(this.id)
  }

  getOneComestible(id: string){
    this._comestibleService.getOneComestible(id).subscribe((data: Comestible) => {
      this.formComestible.patchValue({
        CodigoComestible: data.CodigoComestible,
        DescripcionComestible: data.DescripcionComestible,
        CantidadComestible: data.CantidadComestible,
        CodigoRestaurante: data.CodigoRestaurante,
        TipoComestible: data.TipoComestible
      })
    })
  }

  addComestible(){
    const comestible: Comestible = {
      CodigoComestible: this.formComestible.value.CodigoComestible,
      DescripcionComestible: this.formComestible.value.DescripcionComestible,
      CantidadComestible: this.formComestible.value.CantidadComestible,
      CodigoRestaurante: this.formComestible.value.CodigoRestaurante,
      TipoComestible: this.formComestible.value.TipoComestible,
      id: this.formComestible.value.id
    }

    if(this.id != null){
      comestible.id = this.id
      this._comestibleService.updateComestible(this.id, comestible).subscribe(() => {
        this.router.navigate(['/listcomestible'])
      })
    }else{
      this._comestibleService.saveComestible(comestible).subscribe(() => {
        this.router.navigate(['/listcomestible'])
      })
    }

    
  }
}

