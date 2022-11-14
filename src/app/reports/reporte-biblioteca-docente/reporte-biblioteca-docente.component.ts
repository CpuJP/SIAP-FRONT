import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-reporte-biblioteca-docente',
  templateUrl: './reporte-biblioteca-docente.component.html',
  styleUrls: ['./reporte-biblioteca-docente.component.css']
})
export class ReporteBibliotecaDocenteComponent implements OnInit {

  form: any = {
    fecha_ingreso: null,
    fecha_salida: null,
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
    const {fecha_ingreso, fecha_salida, tipo} = this.form;
    this.reporteService.bibliotecaDocente(fecha_ingreso, fecha_salida, tipo).subscribe(
      (Response: BlobPart) => {
      const file = new Blob([Response], { type: 'application/'+tipo });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })
  }

}
