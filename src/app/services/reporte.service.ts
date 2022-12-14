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

  bibliotecaDocente(fecha_ingreso: string, fecha_salida: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'biblioteca/docente/download'+'?'+'fecha_ingreso='+fecha_ingreso+'&'+'fecha_salida='+fecha_salida+'&'+'tipo='+tipo,httpOptions);
  }

  campusEstudiante(Fecha_Inicio: string, Fecha_Final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'campus/estudiante/download'+'?'+'Fecha_Inicio='+Fecha_Inicio+'&'+'Fecha_Final='+Fecha_Final+'&'+'tipo='+tipo,httpOptions);
  }

  campusDocentes(Fecha_Inicio: string, Fecha_Final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'campus/docente/download'+'?'+'Fecha_Inicio='+Fecha_Inicio+'&'+'Fecha_Final='+Fecha_Final+'&'+'tipo='+tipo,httpOptions);
  }

  campusEgresado(Fecha_Inicio: string, Fecha_Final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'campus/egresado/download'+'?'+'Fecha_Inicio='+Fecha_Inicio+'&'+'Fecha_Final='+Fecha_Final+'&'+'tipo='+tipo,httpOptions);
  }

  salaComputoEstudiante(Fecha_Inicio: string, Fecha_Final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'salacomputo/estudiante/download'+'?'+'Fecha_Inicio='+Fecha_Inicio+'&'+'Fecha_Final='+Fecha_Final+'&'+'tipo='+tipo,httpOptions);
  }

  laboratorioEstudiante(Fecha_Inicio: string, Fecha_Final: string, tipo: string): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(API_URL+'laboratorio/estudiante/download'+'?'+'Fecha_Inicio='+Fecha_Inicio+'&'+'Fecha_Final='+Fecha_Final+'&'+'tipo='+tipo,httpOptions);
  }
}