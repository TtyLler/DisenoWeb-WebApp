import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent {
  listTecnologia: Tecnologia[] = [];
  filterPost = '';
  constructor(private _tecnologiaService: TecnologiaService) {}

  ngOnInit(): void {
    this.getListTecnologias();
  }
  getListTecnologias() {
    this._tecnologiaService.getListTecnologias().subscribe((data) => {
      this.listTecnologia = data;
    });
  }
  deleteTecnologia(id: string) {
    console.log(id);
    this._tecnologiaService.deleteTecnologia(id).subscribe(() => {
      this.getListTecnologias();
    });
  }
}

