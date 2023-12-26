import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Evento } from '../../model/evento';
import { EventosService } from '../../service/eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.css'
})



export class EventosListComponent implements OnInit{

  eventos: Evento[] = [];


  constructor(private router: Router, private eventosService: EventosService) {

  }


  ngOnInit(): void {
    this.eventosService.getEventos()
      .subscribe(data => {
        this.eventos = data;
      });
  };

  public getEventoDetails(evento: Evento) {
    this.router.navigate(['/evento', evento.getId()]);
  }
}
