import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-tecnologia',
  templateUrl: './add-tecnologia.component.html',
  styleUrls: ['./add-tecnologia.component.css']
})
export class AddTecnologiaComponent {
  formTecnologia: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _tecnologiaService: TecnologiaService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute) {
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
        this.router.navigate(['/tecnologia'])
      })
    } else {
      this._tecnologiaService.saveTecnologia(tecnologia).subscribe(() => {
        console.log(tecnologia)
        this.router.navigate(['/tecnologia'])
      })
    }
  }
}

