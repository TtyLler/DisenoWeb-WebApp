import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
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
import { ListPaisComponent } from './components/list-pais/list-pais.component';
import { AddEditPaisComponent } from './components/add-edit-pais/add-edit-pais.component';
import { ListComestibleComponent } from './components/list-comestible/list-comestible.component';
import { AddEditComestibleComponent } from './components/add-edit-comestible/add-edit-comestible.component';
import { ListDesechableComponent } from './components/list-desechable/list-desechable.component';
import { AddEditDesechableComponent } from './components/add-edit-desechable/add-edit-desechable.component';
import { ListFacturaComponent } from './components/list-factura/list-factura.component';
import { AddEditFacturaComponent } from './components/add-edit-factura/add-edit-factura.component';
import { AddEditEquipoComponent } from './components/add-edit-equipo/add-edit-equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { ListCajaComponent } from './components/list-caja/list-caja.component';
import { AddEditCajaComponent } from './components/add-edit-caja/add-edit-caja.component';
import { LimpiesaHigieneComponent } from './limpiesa-higiene/limpiesa-higiene.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProveedorComponent } from './list-proveedor/list-proveedor.component';
import { AddLimpiezaComponent } from './components/add-limpieza/add-limpieza.component';
import { AddTecnologiaComponent } from './components/add-tecnologia/add-tecnologia.component';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { logincheckGuard } from './guard/logincheck.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'listempleado',
    canActivate: [logincheckGuard],
    component: ListEmpleadoComponent,
  },
  {
    path: 'add-empleado',
    canActivate: [logincheckGuard],
    component: AddEditEmpleadoComponent,
  },
  {
    path: 'edit-empleado/:id',
    canActivate: [logincheckGuard],
    component: AddEditEmpleadoComponent,
  },
  {
    path: 'listmesa',
    canActivate: [logincheckGuard],
    component: ListMesaComponent,
  },
  {
    path: 'add-mesa',
    canActivate: [logincheckGuard],
    component: AddEditMesaComponent,
  },
  {
    path: 'edit-mesa/:id',
    canActivate: [logincheckGuard],
    component: AddEditMesaComponent,
  },
  {
    path: 'listespecialidad',
    canActivate: [logincheckGuard],
    component: ListEspecialidadComponent,
  },
  {
    path: 'add-especialidad',
    canActivate: [logincheckGuard],
    component: AddEditEspecialidadComponent,
  },
  {
    path: 'edit-especialidad/:id',
    canActivate: [logincheckGuard],
    component: AddEditEspecialidadComponent,
  },
  {
    path: 'listbebida',
    canActivate: [logincheckGuard],
    component: ListBebidaComponent,
  },
  {
    path: 'add-bebida',
    canActivate: [logincheckGuard],
    component: AddEditBebidaComponent,
  },
  {
    path: 'edit-bebida/:id',
    canActivate: [logincheckGuard],
    component: AddEditBebidaComponent,
  },
  {
    path: 'listequipo',
    canActivate: [logincheckGuard],
    component: ListEquipoComponent,
  },
  {
    path: 'add-equipo',
    canActivate: [logincheckGuard],
    component: AddEditEquipoComponent,
  },
  {
    path: 'edit-equipo/:id',
    canActivate: [logincheckGuard],
    component: AddEditEquipoComponent,
  },
  {
    path: 'listcaja',
    canActivate: [logincheckGuard],
    component: ListCajaComponent,
  },
  {
    path: 'add-caja',
    canActivate: [logincheckGuard],
    component: AddEditCajaComponent,
  },
  {
    path: 'edit-caja/:id',
    canActivate: [logincheckGuard],
    component: AddEditCajaComponent,
  },
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
  { path: 'mesas-dispo',canActivate: [logincheckGuard], component: MesasDispoComponent },
  { path: 'facturas',canActivate: [logincheckGuard], component: FacturasComponent },
  { path: 'menu', canActivate: [logincheckGuard], component: MenuComponent },
  {
    path: 'listpais',
    component: ListPaisComponent,
  },
  {
    path: 'add-pais',
    component: AddEditPaisComponent,
  },
  {
    path: 'edit-pais/:id',
    component: AddEditPaisComponent,
  },
  {
    path: 'listcomestible',
    component: ListComestibleComponent,
  },
  {
    path: 'add-comestible',
    component: AddEditComestibleComponent,
  },
  {
    path: 'edit-comestible/:id',
    component: AddEditComestibleComponent,
  },
  {
    path: 'listdesechable',
    component: ListDesechableComponent,
  },
  {
    path: 'add-desechable',
    component: AddEditDesechableComponent,
  },
  {
    path: 'edit-desechable/:id',
    component: AddEditDesechableComponent,
  },
  {
    path: 'listfactura',
    component: ListFacturaComponent,
  },
  {
    path: 'add-factura',
    component: AddEditFacturaComponent,
  },
  {
    path: 'edit-factura/:id',
    component: AddEditFacturaComponent,
  },
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
