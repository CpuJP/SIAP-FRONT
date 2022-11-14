import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CarnetComponent } from './carnet/carnet.component';
import { PersonaComponent } from './persona/persona.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reports/reporte_bilbioteca_estudiante/reportes.component';
import { ReporteBibliotecaDocenteComponent } from './reports/reporte-biblioteca-docente/reporte-biblioteca-docente.component';
import { ReporteCampusEstudianteComponent } from './reports/reporte-campus-estudiante/reporte-campus-estudiante.component';
import { ReporteCampusDocenteComponent } from './reports/reporte-campus-docente/reporte-campus-docente.component';
import { ReporteCampusEgresadoComponent } from './reports/reporte-campus-egresado/reporte-campus-egresado.component';
import { ReporteSalaComputoEstudianteComponent } from './reports/reporte-sala-computo-estudiante/reporte-sala-computo-estudiante.component';
import { ReporteLaboratorioEstudianteComponent } from './reports/reporte-laboratorio-estudiante/reporte-laboratorio-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarnetComponent,
    PersonaComponent,
    NavMainComponent,
    HomeComponent,
    ReportesComponent,
    ReporteBibliotecaDocenteComponent,
    ReporteCampusEstudianteComponent,
    ReporteCampusDocenteComponent,
    ReporteCampusEgresadoComponent,
    ReporteSalaComputoEstudianteComponent,
    ReporteLaboratorioEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
