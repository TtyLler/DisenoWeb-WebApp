import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
})
export class ReservacionesComponent {
  listReservas: any = [];
  formReservacion: FormGroup;
  userNombre = '';
  faTrash = faTrashAlt
  faCancel = faCancel
  constructor(
    private fb: FormBuilder,
    private _reservaService: ReservaService,
    private aRouter: ActivatedRoute
  ) {
    this.formReservacion = this.fb.group({
      NombreCompleto: [this.getName(), Validators.required],
      Fecha: ['', Validators.required],
      Personas: ['', Validators.required],
    });
    const idParam = aRouter.snapshot.paramMap.get('id');
    if (idParam !== null && idParam !== undefined) {
      this.userNombre = decodeURIComponent(idParam);
    }
  }
  ngOnInit(): void {
    console.log(this.userNombre);
    
    this.getListReservas();
  }

  getListReservas() {
    this._reservaService.userReserva(this.userNombre).subscribe((data) => {
      this.listReservas = data;
    });
  }

  getName() {
    return localStorage.getItem('name')?.toString();
  }

  deleteReserva(id:string){
    this._reservaService.deleteReserva(id).subscribe(() => {
      this.getListReservas();
    });
  }

  saveReserva() {
    const reserva: Reserva = {
      CodigoReserva: 1,
      FechaHora: this.formReservacion.value.Fecha,
      NombreCliente: this.formReservacion.value.NombreCompleto,
      CantidadPersonas: parseInt(this.formReservacion.value.Personas),
      id: ''
    };
    this._reservaService.saveReserva(reserva).subscribe();

    window.location.reload();
  }
}
