import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Evento } from '../../../model/evento';
import { EventosService } from '../../../service/eventos.service';

@Component({
  selector: 'app-eventos-ciudad-list',
  templateUrl: './eventos-ciudad-list.component.html',
  styleUrls: ['./eventos-ciudad-list.component.css'],
})
export class EventosCiudadListComponent implements OnInit {
  eventos: Evento[] = [];
  localidad: string = ' ';

  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.localidad = params.get('localidad') ?? '';
      
      this.eventosService.findByCiudad(this.localidad).subscribe((data) => {
        this.eventos = data;
      });
    });
  }

  deleteEvento(evento: Evento): void {
    console.log("Entra en la función deleteEvento");
    this.eventosService.deleteEvento(evento).subscribe((data) => {
      console.log("Evento borrado");
      this.eventos = this.eventos.filter((u) => u !== evento);
    });
  }

  editarEvento(eventoId: Number): void{
    console.log("-----Entra en editar el evento con ID:" +eventoId );
    this.router.navigate(['/editar-evento', eventoId]);
  }

  public getEventoDetails(eventoId: number) {
    console.log("entra en get evento details");
    console.log(eventoId);
    this.router.navigate(['/eventos', eventoId]);
  }
}