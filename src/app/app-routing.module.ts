import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HomeComponent } from './home/home.component';
import { NuevoestudianteComponent } from './nuevoestudiante/nuevoestudiante.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'estudiantes',
    component: EstudianteComponent
  },
  {
    path: 'nuevoestudiante',
    component: NuevoestudianteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
