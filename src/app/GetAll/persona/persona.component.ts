import { Component, OnInit } from '@angular/core';
import { PersonauService } from '../../services/personau.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona?: any[];
  message?: any;

  constructor(private personaService: PersonauService) { }

  ngOnInit(): void {

    this.personaService.findAll().subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.persona = [];
        this.message = err.message;
      }
    );
  }

}
