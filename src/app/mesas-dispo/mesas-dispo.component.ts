import { Component } from '@angular/core';

interface Mesa {
  numero: number;
}

@Component({
  selector: 'app-mesas-dispo',
  templateUrl: './mesas-dispo.component.html',
  styleUrls: ['./mesas-dispo.component.css']
})
export class MesasDispoComponent {
  mesas: Mesa[] = [
    { numero: 1 },
    { numero: 2 },
    { numero: 3 },
    { numero: 4 },
    { numero: 5 },
    { numero: 6 },
    { numero: 7 },
    { numero: 8 },
    { numero: 9 },
    { numero: 10 },
    { numero: 11 },
    { numero: 12 },

  ];

  selectedTable: number | null = null;

  verFactura(numeroMesa: number) {
    this.selectedTable = numeroMesa;
  }
}
