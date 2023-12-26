import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../model/evento';
import { EventosService } from '../../service/eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.css',
})
export class EventosListComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private router: Router, private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((data) => {
      this.eventos = data;
    });
  }

  deleteEvento(evento: Evento): void {
    this.eventosService.deleteEvento(evento).subscribe((data) => {
      this.eventos = this.eventos.filter((u) => u !== evento);
    });
  }
}
