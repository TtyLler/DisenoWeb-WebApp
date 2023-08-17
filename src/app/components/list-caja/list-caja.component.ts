import { Component } from '@angular/core';
import { Caja } from 'src/app/interfaces/caja';
import { CajaService } from 'src/app/services/caja.service';

@Component({
  selector: 'app-list-caja',
  templateUrl: './list-caja.component.html',
  styleUrls: ['./list-caja.component.css']
})
export class ListCajaComponent {
  listCaja: Caja[] = [];
  filterPost = ''
  constructor(private _cajaService: CajaService) {}

  ngOnInit(): void {
    this.getListCajas();
  }
  getListCajas() {
    this._cajaService.getListCajas().subscribe((data) => {
      this.listCaja = data;
    });
  }
  deleteCaja(id: string) {
    console.log(id);
    this._cajaService.deleteCaja(id).subscribe(() => {
      this.getListCajas();
    });
  }
}
