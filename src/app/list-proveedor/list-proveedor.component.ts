import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';
import { LoginService } from 'src/app/services/login.service';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { generateBitacora } from 'src/app/utils/generatebitacora';
import { DESCRIPTION_TYPES } from 'src/app/constants/description.constants';
@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  listProveedor: Proveedor[] = []; 
  filterPost = '';

  constructor(private _proveedorService: ProveedorService, private _loginService: LoginService, private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListProveedors(); 
  }
  getListProveedors() { 
    this._proveedorService.getListProveedors().subscribe((data) => { 
      this.listProveedor = data; 
    });
  }

  deleteProveedor(id: string) { 
    console.log(id);
    this._proveedorService.deleteProveedor(id).subscribe(() => { 
      this._bitacoraService.saveBitacora(generateBitacora(this._loginService.getUser(), `${DESCRIPTION_TYPES.DELETE}Proveedor`)).subscribe()
      this.getListProveedors(); 
    }); 
  } 
}
