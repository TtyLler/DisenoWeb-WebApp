import { Component } from '@angular/core';
import { Bebida } from 'src/app/interfaces/bebida';
import { BebidaService } from 'src/app/services/bebida.service'; 

@Component({
  selector: 'app-list-bebida',
  templateUrl: './list-bebida.component.html',
  styleUrls: ['./list-bebida.component.css']
})
export class ListBebidaComponent {
  listBebida: Bebida[] = [];
  filterPost = ''
  constructor(private _bebidaService: BebidaService) {}

  ngOnInit(): void {
    this.getListBebidas();
  }
  getListBebidas() {
    this._bebidaService.getListBebidas().subscribe((data) => {
      this.listBebida = data;
    });
  }
  deleteBebida(id: string) {
    console.log(id);
    this._bebidaService.deleteBebida(id).subscribe(() => {
      this.getListBebidas();
    });
  }
}
