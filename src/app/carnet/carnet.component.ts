import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {

  carnet?: any[];
  message?: any;

  constructor(private carnetService: CarnetService) { }

  ngOnInit(): void {

    this.carnetService.findAll().subscribe(
      data => {
        this.carnet = data;
      },
      err => {
        this.carnet = [];
        this.message = err.message;
      }
    );

  }
}
