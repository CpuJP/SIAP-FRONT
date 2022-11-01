import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://bd-siap-principal.herokuapp.com/api/crud/rfidnfc/';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }

}
