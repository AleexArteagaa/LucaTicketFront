import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../../../model/evento';
import { EventosService } from '../../../service/eventos.service';

@Component({
  selector: 'app-eventos-ciudad-list',
  templateUrl: './eventos-ciudad-list.component.html',
  styleUrls: ['./eventos-ciudad-list.component.css'],
})
export class EventosCiudadListComponent implements OnInit {
  eventos: Evento[] = [];
  ciudad: string = ' ';

  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ciudad = params.get('ciudad') ?? '';
      
      this.eventosService.findByCiudad(this.ciudad).subscribe((data) => {
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
}