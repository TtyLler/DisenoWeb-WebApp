import { Component } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-equipo',
  templateUrl: './add-edit-equipo.component.html',
  styleUrls: ['./add-edit-equipo.component.css']
})
export class AddEditEquipoComponent {
  formEquipo: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _equipoService: EquipoService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formEquipo = this.fb.group({
      CodigoEquipo: ['', Validators.required],
      NombreEquipo: ['', Validators.required],
      Cantidad: ['', Validators.required],
      Precio: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneEquipo(this.id)
  }

  getOneEquipo(id: string){
    this._equipoService.getOneEquipo(id).subscribe((data: Equipo) => {
      this.formEquipo.patchValue({
        CodigoEquipo: data.CodigoEquipo,
        NombreEquipo: data.NombreEquipo,
        Cantidad: data.Cantidad,
        Precio: data.Precio,
        CodigoRestaurante: data.CodigoRestaurante,
      })
    })
  }

  addEquipo(){
    const equipo: Equipo = {
      CodigoEquipo: this.formEquipo.value.CodigoEquipo,
      NombreEquipo: this.formEquipo.value.NombreEquipo,
      Cantidad: this.formEquipo.value.Cantidad,
      Precio: this.formEquipo.value.Precio,
      CodigoRestaurante: this.formEquipo.value.CodigoRestaurante,
      id: this.formEquipo.value.id
    }

    if(this.id != null){
      equipo.id = this.id
      this._equipoService.updateEquipo(this.id, equipo).subscribe(() => {
        this.router.navigate(['/listequipo'])
      })
    }else{
      this._equipoService.saveEquipo(equipo).subscribe(() => {
        console.log(equipo)
        this.router.navigate(['/listequipo'])
      })
    }
  }
}
