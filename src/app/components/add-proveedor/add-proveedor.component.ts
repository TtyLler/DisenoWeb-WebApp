import { Component } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent {
  formProveedor: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _proveedorService: ProveedorService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute) {
    this.formProveedor = this.fb.group({
      CodigoProv: ['', Validators.required],
      NombreProv: ['', Validators.required],
      ApellidoProv: ['', Validators.required],
      TelefonoProv: ['', Validators.required],
      CelularProv: ['', Validators.required],
   

    })

    this.id = aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.operacion = 'Editar '
    }
    this.getOneProveedor(this.id)
  }

  getOneProveedor(id: string) {
    this._proveedorService.getOneProveedor(id).subscribe((data: Proveedor) => {
      this.formProveedor.patchValue({
        CodigoProv: data.CodigoProv,
        NombreProv: data.NombreProv,
        ApellidoProv: data.ApellidoProv,
        TelefonoProv: data.TelefonoProv,
        CelularProv: data.CelularProv
        
      })
    })
  }

  addProveedor() {
    const proveedor: Proveedor = {
      CodigoProv: this.formProveedor.value.CodigoProv,
      NombreProv: this.formProveedor.value.NombreProv,
      ApellidoProv: this.formProveedor.value.ApellidoProv,
      TelefonoProv: this.formProveedor.value.TelefonoProv,
      CelularProv: this.formProveedor.value.CelularProv,
      id: this.formProveedor.value.id,
    }

    if (this.id != null) {
      proveedor.id = this.id
      this._proveedorService.updateProveedor(this.id, proveedor).subscribe(() => {
        this.router.navigate(['/listproveedor'])
      })
    } else {
      this._proveedorService.saveProveedor(proveedor).subscribe(() => {
        console.log(proveedor)
        this.router.navigate(['/listproveedor'])
      })
    }
  }
}
