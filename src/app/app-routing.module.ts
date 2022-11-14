import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarnetComponent } from './carnet/carnet.component';
import { PersonaComponent } from './persona/persona.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { ReportesComponent } from './reports/reporte_bilbioteca_estudiante/reportes.component';
import { ReporteBibliotecaDocenteComponent } from './reports/reporte-biblioteca-docente/reporte-biblioteca-docente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'carnet', component: CarnetComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nav-main', component: NavMainComponent},
  { path: 'biblioEstu', component: ReportesComponent },
  { path: 'biblioDocen', component: ReporteBibliotecaDocenteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
