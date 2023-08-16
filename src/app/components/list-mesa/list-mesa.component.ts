import { Component } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-list-mesa',
  templateUrl: './list-mesa.component.html',
  styleUrls: ['./list-mesa.component.css']
})
export class ListMesaComponent {
  listMesa: Mesa[] = [];
  filterPost = ''
  constructor(private _mesaService: MesaService) {}

  ngOnInit(): void {
    this.getListMesas();
  }
  getListMesas() {
    this._mesaService.getListMesas().subscribe((data) => {
      this.listMesa = data;
    });
  }
  deleteMesa(id: string) {
    console.log(id);
    this._mesaService.deleteMesa(id).subscribe(() => {
      this.getListMesas();
    });
  }
}
