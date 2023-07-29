import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { FacturasComponent } from './facturas/facturas.component';
import { MenuComponent } from './menu/menu.component';
import { MesasDispoComponent } from './mesas-dispo/mesas-dispo.component';

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
  { path: 'mesas-dispo', component: MesasDispoComponent },
  { path: 'facturas', component: FacturasComponent},
  { path: 'menu', component: MenuComponent},
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
