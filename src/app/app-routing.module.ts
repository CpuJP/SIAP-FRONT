import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarnetComponent } from './carnet/carnet.component';
import { PersonaComponent } from './persona/persona.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { ReporteBibliotecaDocenteComponent } from './reports/reporte-biblioteca-docente/reporte-biblioteca-docente.component';
import { ReporteCampusEstudianteComponent } from './reports/reporte-campus-estudiante/reporte-campus-estudiante.component';
import { ReporteCampusDocenteComponent } from './reports/reporte-campus-docente/reporte-campus-docente.component';
import { ReporteCampusEgresadoComponent } from './reports/reporte-campus-egresado/reporte-campus-egresado.component';
import { ReportesComponent } from './reports/reporte_bilbioteca_estudiante/reportes.component';
import { ReporteSalaComputoEstudianteComponent } from './reports/reporte-sala-computo-estudiante/reporte-sala-computo-estudiante.component';
import { ReporteLaboratorioEstudianteComponent } from './reports/reporte-laboratorio-estudiante/reporte-laboratorio-estudiante.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'carnet', component: CarnetComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nav-main', component: NavMainComponent},
  { path: 'biblioEstu', component: ReportesComponent },
  { path: 'biblioDocen', component: ReporteBibliotecaDocenteComponent },
  { path: 'campusEstu', component: ReporteCampusEstudianteComponent },
  { path: 'campusDoce', component: ReporteCampusDocenteComponent },
  { path: 'campusEgre', component: ReporteCampusEgresadoComponent },
  { path: 'salaComEstu', component: ReporteSalaComputoEstudianteComponent },
  { path: 'labEstu', component: ReporteLaboratorioEstudianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
