import { Component, OnInit } from '@angular/core';
import { Comestible } from 'src/app/interfaces/comestible';
import { ComestibleService } from 'src/app/services/comestible.service';

@Component({
  selector: 'app-list-comestible',
  templateUrl: './list-comestible.component.html',
  styleUrls: ['./list-comestible.component.css']
})
export class ListComestibleComponent {
  listComestible: Comestible[] = [];
  filterPost = ''

  constructor(private _comestibleService: ComestibleService) {}

  ngOnInit(): void {
    this.getListComestibles();
  }
  getListComestibles() {
    this._comestibleService.getListComestibles().subscribe((data) => {
      this.listComestible = data;
    });
  }
  deleteComestible(id: string) {
    console.log(id);
    this._comestibleService.deleteComestible(id).subscribe(() => {
      this.getListComestibles();
    });
  }

}






