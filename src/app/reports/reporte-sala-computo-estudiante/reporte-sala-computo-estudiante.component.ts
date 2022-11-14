import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-reporte-sala-computo-estudiante',
  templateUrl: './reporte-sala-computo-estudiante.component.html',
  styleUrls: ['./reporte-sala-computo-estudiante.component.css']
})
export class ReporteSalaComputoEstudianteComponent implements OnInit {

  form: any = {
    Fecha_Inicio: null,
    Fecha_Final: null,
    tipo: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  message?: any;
  errorMessage = '';

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {Fecha_Inicio, Fecha_Final, tipo} = this.form;
    this.reporteService.salaComputoEstudiante(Fecha_Inicio, Fecha_Final, tipo).subscribe(
      (Response: BlobPart) => {
        const file = new Blob([Response], { type: 'application/'+tipo});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    );
  }

}
