import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent {
  formEmpleado: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _empleadoService: EmpleadoService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute ){
    this.formEmpleado = this.fb.group({
      CodigoEmpleado: ['', Validators.required],
      NombreEmpleado: ['', Validators.required],
      CodigoUsuario: ['', Validators.required],
      CodigoRestaurante: ['', Validators.required],
      Cedula: ['', Validators.required],
      Telefono: ['', Validators.required]
    }) 

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id != null){
      this.operacion = 'Editar '
    }
    this.getOneEmpleado(this.id)
  }

  getOneEmpleado(id: string){
    this._empleadoService.getOneEmpleado(id).subscribe((data: Empleado) => {
      this.formEmpleado.patchValue({
        CodigoEmpleado: data.CodigoEmpleado,
        NombreEmpleado: data.NombreEmpleado,
        CodigoUsuario: data.CodigoUsuario,
        CodigoRestaurante: data.CodigoRestaurante,
        Cedula: data.Cedula,
        Telefono: data.Telefono
      })
    })
  }

  addEmpleado(){
    const empleado: Empleado = {
      CodigoEmpleado: this.formEmpleado.value.CodigoEmpleado,
      NombreEmpleado: this.formEmpleado.value.NombreEmpleado,
      CodigoUsuario: this.formEmpleado.value.CodigoUsuario,
      CodigoRestaurante: this.formEmpleado.value.CodigoRestaurante,
      Cedula: this.formEmpleado.value.Cedula,
      Telefono: this.formEmpleado.value.Telefono,
      id: this.formEmpleado.value.id
    }

    if(this.id != null){
      empleado.id = this.id
      this._empleadoService.updateEmpleado(this.id, empleado).subscribe(() => {
        this.router.navigate(['/listempleado'])
      })
    }else{
      this._empleadoService.saveEmpleado(empleado).subscribe(() => {
        this.router.navigate(['/listempleado'])
      })
    }

    
  }
}
