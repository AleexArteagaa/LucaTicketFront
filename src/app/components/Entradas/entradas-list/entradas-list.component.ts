import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../../service/eventos.service';
import { Evento } from '../../../model/evento';

@Component({
  selector: 'app-entradas-list',
  templateUrl: './entradas-list.component.html',
  styleUrl: './entradas-list.component.css',
})
export class EntradasListComponent {
  eventos: Evento[] = [];

  constructor(private router: Router, private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((data) => {
      this.eventos = data;
    });
  }

  public comprarEntrada(eventoId: number) {
    this.router.navigate(['/entradas', eventoId]);
  }
}
