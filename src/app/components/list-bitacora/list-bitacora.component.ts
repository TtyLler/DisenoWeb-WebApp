import { Component } from '@angular/core';
import { Bitacora } from 'src/app/interfaces/bitacora';
import { BitacoraService } from 'src/app/services/bitacora.service';

@Component({
  selector: 'app-list-bitacora',
  templateUrl: './list-bitacora.component.html',
  styleUrls: ['./list-bitacora.component.css']
})
export class ListBitacoraComponent {
  count: any
  page:number = 1
  listBitacora: Bitacora[] = [];
  filterPost = ''
  constructor(private _bitacoraService: BitacoraService) {}

  ngOnInit(): void {
    this.getListBitacoras();
  }
  getListBitacoras() {
    this._bitacoraService.getListBitacoras().subscribe((data) => {
      this.listBitacora = data;
    });
  }
  deleteBitacora(id: string) {
    console.log(id);
    this._bitacoraService.deleteBitacora(id).subscribe(() => {
      this.getListBitacoras();
    });
  }
}
