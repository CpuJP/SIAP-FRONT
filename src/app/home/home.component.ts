import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet.service';
import { PersonauService } from '../services/personau.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello?: string;
  cars?: any[];
  personau?: any[];
  message?: any;

  constructor(private carsService: CarnetService, private personaUService: PersonauService) { }

  ngOnInit(): void {

    this.personaUService.findAll().subscribe(
      data => {
        this.personau = data;
      },
      err => {
        this.personau = [];
        this.message = err.message;
      }
    );
  }
}
