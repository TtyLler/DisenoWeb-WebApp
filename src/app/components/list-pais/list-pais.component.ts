import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-list-pais',
  templateUrl: './list-pais.component.html',
  styleUrls: ['./list-pais.component.css']
})
export class ListPaisComponent {
  listPaises: Pais[] = [];
  filterPost = ''

  constructor(private _paisService: PaisService) {}

  ngOnInit(): void {
    this.getListPaises();
  }
  getListPaises() {
    this._paisService.getListPaises().subscribe((data) => {
      this.listPaises = data;
    });
  }
  deletePais(id: string) {
    console.log(id);
    this._paisService.deletePais(id).subscribe(() => {
      this.getListPaises();
    });
  }
}
