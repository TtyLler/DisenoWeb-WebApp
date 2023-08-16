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
import { RegistroComponent } from './components/registro/registro.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddEditEquipoComponent } from './components/add-edit-equipo/add-edit-equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { FilterEquipoPipe } from './pipes/filter-equipo.pipe';
import { ListCajaComponent } from './components/list-caja/list-caja.component';
import { AddEditCajaComponent } from './components/add-edit-caja/add-edit-caja.component';
import { FilterCajaPipe } from './pipes/filter-caja.pipe';

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
    RegistroComponent,
    AddEditEquipoComponent,
    ListEquipoComponent,
    FilterEquipoPipe,
    ListCajaComponent,
    AddEditCajaComponent,
    FilterCajaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
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
