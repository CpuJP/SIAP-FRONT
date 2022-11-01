import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://bd-siap-principal.herokuapp.com/api/crud/personaluniversidad/'

@Injectable({
  providedIn: 'root'
})
export class PersonauService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
}
