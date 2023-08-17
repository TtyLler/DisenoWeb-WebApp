import { Component, OnInit } from '@angular/core';
import { Desechable } from 'src/app/interfaces/desechable';
import { DesechableService } from 'src/app/services/desechable.service';

@Component({
  selector: 'app-list-desechable',
  templateUrl: './list-desechable.component.html',
  styleUrls: ['./list-desechable.component.css']
})
export class ListDesechableComponent {
  listDesechable: Desechable[] = [];
  filterPost = ''

  constructor(private _desechableService: DesechableService) {}

  ngOnInit(): void {
    this.getListDesechables();
  }
  getListDesechables() {
    this._desechableService.getListDesechables().subscribe((data) => {
      this.listDesechable = data;
    });
  }
  deleteDesechable(id: string) {
    console.log(id);
    this._desechableService.deleteDesechable(id).subscribe(() => {
      this.getListDesechables();
    });
  }
}










