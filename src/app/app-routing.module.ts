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
  { path: 'mesas-dispo', component: MesasDispoComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'menu', component: MenuComponent },
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
