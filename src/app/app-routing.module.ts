import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { FacturasComponent } from './facturas/facturas.component';
import { MenuComponent } from './menu/menu.component';
import { MesasDispoComponent } from './mesas-dispo/mesas-dispo.component';
import { AddEditMesaComponent } from './components/add-edit-mesa/add-edit-mesa.component';
import { ListMesaComponent } from './components/list-mesa/list-mesa.component';
import { ListEspecialidadComponent } from './components/list-especialidad/list-especialidad.component';
import { AddEditEspecialidadComponent } from './components/add-edit-especialidad/add-edit-especialidad.component';
import { AddEditBebidaComponent } from './components/add-edit-bebida/add-edit-bebida.component';
import { ListBebidaComponent } from './components/list-bebida/list-bebida.component';
import { LimpiesaHigieneComponent } from './limpiesa-higiene/limpiesa-higiene.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProveedorComponent } from './list-proveedor/list-proveedor.component';
import { AddLimpiezaComponent } from './components/add-limpieza/add-limpieza.component';
import { AddTecnologiaComponent } from './components/add-tecnologia/add-tecnologia.component';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'listempleado',
    component: ListEmpleadoComponent,
  },
  {
    path: 'add-empleado',
    component: AddEditEmpleadoComponent,
  },
  {
    path: 'edit-empleado/:id',
    component: AddEditEmpleadoComponent,
  },
  {
    path: 'listmesa',
    component: ListMesaComponent,
  },
  {
    path: 'add-mesa',
    component: AddEditMesaComponent,
  },
  {
    path: 'edit-mesa/:id',
    component: AddEditMesaComponent,
  },
  {
    path: 'listespecialidad',
    component: ListEspecialidadComponent,
  },
  {
    path: 'add-especialidad',
    component: AddEditEspecialidadComponent,
  },
  {
    path: 'edit-especialidad/:id',
    component: AddEditEspecialidadComponent,
  },
  {
    path: 'listbebida',
    component: ListBebidaComponent,
  },
  {
    path: 'add-bebida',
    component: AddEditBebidaComponent,
  },
  {
    path: 'edit-bebida/:id',
    component: AddEditBebidaComponent,
  },
  { path: 'mesas-dispo', component: MesasDispoComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'limpiesa-higiene', component: LimpiesaHigieneComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'listproveedor', component:ProveedorComponent},
  { path: 'add-limpieza', component: AddLimpiezaComponent},
  { path: 'edit-limpieza/:id', component: AddLimpiezaComponent},
  { path: 'limpiesa-higiene', component: LimpiesaHigieneComponent},
  { path: 'add-tecnologia', component: AddTecnologiaComponent},
  { path: 'add-tecnologia/:id', component: AddTecnologiaComponent},
  { path: 'add-proveedor', component: AddProveedorComponent},
  { path: 'add-proveedor/:id', component: AddProveedorComponent},

  
 


  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
