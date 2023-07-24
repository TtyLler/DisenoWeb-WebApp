import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ArreglasHeterogenosComponent } from './arreglas-heterogenos/arreglas-heterogenos.component';
import { ArreglasHomogeneosComponent } from './arreglas-homogeneos/arreglas-homogeneos.component';
import { ArreglosManejoComponent } from './arreglos-manejo/arreglos-manejo.component';
import {HttpClientModule } from'@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { NuevoestudianteComponent } from './nuevoestudiante/nuevoestudiante.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ArreglasHeterogenosComponent,
    ArreglasHomogeneosComponent,
    ArreglosManejoComponent,
    UsuarioComponent,
    EstudianteComponent,
    EncabezadoComponent,
    HomeComponent,
    NuevoestudianteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
