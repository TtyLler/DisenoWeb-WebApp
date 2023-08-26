import { Component } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent {
  formProveedor: FormGroup
  id: any
  operacion: string = "Agregar "
  constructor(private _proveedorService: ProveedorService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private _loginService: LoginService, private _bitacoraService: BitacoraService) {
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
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.UPDATE}Proveedor`)).subscribe()
        this.router.navigate(['/listproveedor'])
      })
    } else {
      this._proveedorService.saveProveedor(proveedor).subscribe(() => {
        this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(),`${DESCRIPTION_TYPES.ADD}Proveedor`)).subscribe()
        this.router.navigate(['/listproveedor'])
      })
    }
  }
}
