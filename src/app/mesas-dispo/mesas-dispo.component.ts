import { Component } from '@angular/core';
import { Mesa } from '../interfaces/mesa';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-mesas-dispo',
  templateUrl: './mesas-dispo.component.html',
  styleUrls: ['./mesas-dispo.component.css']
})
export class MesasDispoComponent {
  listMesa: Mesa[] = [];
  filterPost = '';
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

