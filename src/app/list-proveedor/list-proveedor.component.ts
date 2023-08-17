import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  listProveedor: Proveedor[] = []; 
  filterPost = '';

  constructor(private _proveedorService: ProveedorService) {}

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
      this.getListProveedors(); 
    }); 
  } 
}
