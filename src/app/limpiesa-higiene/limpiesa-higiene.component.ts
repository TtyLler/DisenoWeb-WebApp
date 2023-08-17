import { Component, OnInit} from '@angular/core';
import { Limpieza } from 'src/app/interfaces/Limpieza';
import { LimpiezaService } from 'src/app/services/limpieza.service';

@Component({
  selector: 'app-limpiesa-higiene',
  templateUrl: './limpiesa-higiene.component.html',
  styleUrls: ['./limpiesa-higiene.component.css']
})
export class LimpiesaHigieneComponent implements OnInit{
  listLimpieza: Limpieza[] = [];
  filterPost = '';

  constructor(private _limpiezaService: LimpiezaService) {}

  ngOnInit(): void {
    this.getListLimpiezas();
  }

  getListLimpiezas() {
    this._limpiezaService.getListLimpiezas().subscribe((data) => {
      this.listLimpieza = data;
    });
  }

  deleteLimpieza(id: string) {
    this._limpiezaService.deleteLimpieza(id).subscribe(() => {
      this.getListLimpiezas();
    });
  }
}

  


