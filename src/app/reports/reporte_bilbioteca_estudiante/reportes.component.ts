import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  form: any = {
    fecha_inicio: null,
    fecha_final: null,
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
    const {fecha_inicio, fecha_final, tipo} = this.form;
    this.reporteService.bibliotecaEstudiante(fecha_inicio, fecha_final, tipo).subscribe((Response: BlobPart) => {
      const file = new Blob([Response], { type: 'application/'+tipo });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

}
