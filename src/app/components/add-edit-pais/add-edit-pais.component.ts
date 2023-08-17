import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais';
import { PaisService } from 'src/app/services/pais.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-pais',
  templateUrl: './add-edit-pais.component.html',
  styleUrls: ['./add-edit-pais.component.css']
})
export class AddEditPaisComponent {
  formPais: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _paisService: PaisService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formPais = this.fb.group({
      CodigoPais: ['', Validators.required],
      NombrePais: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOnePais(this.id)
  }

  getOnePais(id: string){
    this._paisService.getOnePais(id).subscribe((data: Pais) => {
      this.formPais.patchValue({
        CodigoPais: data.CodigoPais,
        NombrePais: data.NombrePais
      })
    })
  }

  addPais(){
    const pais: Pais = {
      CodigoPais: this.formPais.value.CodigoPais,
      NombrePais: this.formPais.value.NombrePais,
      id: this.formPais.value.id
    }

    if(this.id != null){
      pais.id = this.id
      this._paisService.updatePais(this.id, pais).subscribe(() => {
        this.router.navigate(['/listpais'])
      })
    }else{
      this._paisService.savePais(pais).subscribe(() => {
        this.router.navigate(['/listpais'])
      })
    }

    
  }

}

