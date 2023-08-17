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
import { ListPaisComponent } from './components/list-pais/list-pais.component';
import { AddEditPaisComponent } from './components/add-edit-pais/add-edit-pais.component';
import { ListComestibleComponent } from './components/list-comestible/list-comestible.component';
import { AddEditComestibleComponent } from './components/add-edit-comestible/add-edit-comestible.component';
import { ListDesechableComponent } from './components/list-desechable/list-desechable.component';
import { AddEditDesechableComponent } from './components/add-edit-desechable/add-edit-desechable.component';

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
