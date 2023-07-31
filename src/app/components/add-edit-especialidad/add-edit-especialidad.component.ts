import { EspecialidadService } from './../../services/especialidad.service';
import { Especialidad } from './../../interfaces/especialidad';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-especialidad',
  templateUrl: './add-edit-especialidad.component.html',
  styleUrls: ['./add-edit-especialidad.component.css']
})
export class AddEditEspecialidadComponent {
  formEspecialidad: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _especialidadService: EspecialidadService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formEspecialidad = this.fb.group({
      CodigoEspecial: ['', Validators.required],
      NombreEspecial: ['', Validators.required],
      DescripcionEspecial: ['', Validators.required],
      Precio: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneEspecialidad(this.id)
  }

  getOneEspecialidad(id: string){
    this._especialidadService.getOneEspecialidad(id).subscribe((data: Especialidad) => {
      this.formEspecialidad.patchValue({
        CodigoEspecial: data.CodigoEspecial,
        NombreEspecial: data.NombreEspecial,
        DescripcionEspecial: data.DescripcionEspecial,
        Precio: data.Precio
      })
    })
  }

  addEspecialidad(){
    const empleado: Especialidad = {
      CodigoEspecial: this.formEspecialidad.value.CodigoEspecial,
      NombreEspecial: this.formEspecialidad.value.NombreEspecial,
      DescripcionEspecial: this.formEspecialidad.value.DescripcionEspecial,
      Precio: this.formEspecialidad.value.Precio,
      id: this.formEspecialidad.value.id
    }

    if(this.id != null){
      empleado.id = this.id
      this._especialidadService.updateEspecialidad(this.id, empleado).subscribe(() => {
        this.router.navigate(['/listespecialidad'])
      })
    }else{
      this._especialidadService.saveEspecialidad(empleado).subscribe(() => {
        this.router.navigate(['/listespecialidad'])
      })
    }

    
  }
}
