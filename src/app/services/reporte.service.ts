import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'https://micro-reportes-siap.herokuapp.com/report/';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  bibliotecaEstudiante(fecha_inicio: string, fecha_final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'biblioteca/estudiante/download'+'?'+'fecha_inicio='+fecha_inicio+'&'+'fecha_final='+fecha_final+'&'+'tipo='+tipo,httpOptions);
  }
}