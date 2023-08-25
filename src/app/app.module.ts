import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'
import { MesasDispoComponent } from './mesas-dispo/mesas-dispo.component';

import { FacturasComponent } from './facturas/facturas.component';
import { MenuComponent } from './menu/menu.component';
import { FilterPipe } from './pipes/filterEmpleado.pipe';
import { AddEditMesaComponent } from './components/add-edit-mesa/add-edit-mesa.component';
import { ListMesaComponent } from './components/list-mesa/list-mesa.component';
import { FilterMesaPipe } from './pipes/filter-mesa.pipe';
import { ListEspecialidadComponent } from './components/list-especialidad/list-especialidad.component';
import { AddEditEspecialidadComponent } from './components/add-edit-especialidad/add-edit-especialidad.component';
import { FilterEspecialidadPipe } from './pipes/filter-especialidad.pipe';
import { AddEditBebidaComponent } from './components/add-edit-bebida/add-edit-bebida.component';
import { ListBebidaComponent } from './components/list-bebida/list-bebida.component';
import { FilterBebidaPipe } from './pipes/filter-bebida.pipe';
import { AddEditPaisComponent } from './components/add-edit-pais/add-edit-pais.component';
import { ListPaisComponent } from './components/list-pais/list-pais.component';
import { FilterPaisPipe } from './pipes/filter-pais.pipe';
import { AddEditComestibleComponent } from './components/add-edit-comestible/add-edit-comestible.component';
import { ListComestibleComponent } from './components/list-comestible/list-comestible.component';
import { FilterComestiblePipe } from './pipes/filter-comestible.pipe';
import { ListDesechableComponent } from './components/list-desechable/list-desechable.component';
import { AddEditDesechableComponent } from './components/add-edit-desechable/add-edit-desechable.component';
import { FilterDesechablePipe } from './pipes/filter-desechable.pipe';

import { RegistroComponent } from './components/registro/registro.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddEditEquipoComponent } from './components/add-edit-equipo/add-edit-equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { FilterEquipoPipe } from './pipes/filter-equipo.pipe';
import { ListCajaComponent } from './components/list-caja/list-caja.component';
import { AddEditCajaComponent } from './components/add-edit-caja/add-edit-caja.component';
import { FilterCajaPipe } from './pipes/filter-caja.pipe';
import { LimpiesaHigieneComponent } from './limpiesa-higiene/limpiesa-higiene.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { AddLimpiezaComponent } from './components/add-limpieza/add-limpieza.component';
import { FilterLimpiezaPipe } from './pipes/filter-limpieza.pipe';
import { AddTecnologiaComponent } from './components/add-tecnologia/add-tecnologia.component';
import { FilterTecnologiaPipe } from './pipes/filter-tecnologia.pipe';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { ProveedorComponent } from './list-proveedor/list-proveedor.component';
import { FilterProveedorPipe } from './pipes/filter-proveedor.pipe';
import { AddFoodComponent } from './food/food.component';
import { CartComponent } from './cart/cart.component';

import { FilterBitacoraPipe } from './pipes/filter-bitacora.pipe';
import { AddEditBitacoraComponent } from './components/add-edit-bitacora/add-edit-bitacora.component';
import { ListBitacoraComponent } from './components/list-bitacora/list-bitacora.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    HomeComponent,
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,
    MesasDispoComponent,
    FacturasComponent,
    MenuComponent,
    FilterPipe,
    AddEditMesaComponent,
    ListMesaComponent,
    FilterMesaPipe,
    ListEspecialidadComponent,
    AddEditEspecialidadComponent,
    FilterEspecialidadPipe,
    AddEditBebidaComponent,
    ListBebidaComponent,
    FilterBebidaPipe,
    AddEditPaisComponent,
    ListPaisComponent,
    FilterPaisPipe,
    AddEditComestibleComponent,
    ListComestibleComponent,
    FilterComestiblePipe,
    ListDesechableComponent,
    AddEditDesechableComponent,
    FilterDesechablePipe,
    RegistroComponent,
    AddEditEquipoComponent,
    ListEquipoComponent,
    FilterEquipoPipe,
    ListCajaComponent,
    AddEditCajaComponent,
    FilterCajaPipe,
    LimpiesaHigieneComponent,
    TecnologiaComponent,
    FilterLimpiezaPipe,
    AddTecnologiaComponent,
    FilterTecnologiaPipe,
    AddProveedorComponent,
    ProveedorComponent,
    FilterProveedorPipe,
    AddLimpiezaComponent,
    AddFoodComponent,
    CartComponent,
    FilterBitacoraPipe,
    AddEditBitacoraComponent,
    ListBitacoraComponent,
    ReservacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
