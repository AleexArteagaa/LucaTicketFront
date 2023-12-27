import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../../model/evento';
import { EventosService } from '../../../service/eventos.service';

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

  public getEventoDetails(eventoId: number) {
    console.log("entra en get evento details");
    console.log(eventoId);
    this.router.navigate(['/eventos', eventoId]);
  }

  deleteEvento(evento: Evento): void {
    console.log("Entra en la funcion deleteEvento");
    this.eventosService.deleteEvento(evento).subscribe((data) => {
      console.log("Evento borrado");
      this.eventos = this.eventos.filter((u) => u !== evento);
    });
  }
}
