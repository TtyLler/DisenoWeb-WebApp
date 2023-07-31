import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { HttpClientModule } from '@angular/common/http'
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
