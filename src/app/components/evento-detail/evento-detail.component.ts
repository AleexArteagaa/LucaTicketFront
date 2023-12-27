import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { EventosService } from '../../service/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrl: './evento-detail.component.css'
})
export class EventoDetailComponent implements OnInit {

  evento!: Observable<Evento>;

  constructor(private route: ActivatedRoute, private eventosService: EventosService) {
    console.log("----------Componente DetalleEvento inicializado. Elegido Evento.");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.evento = this.getEventoById(Number(params.get("id")));
      })
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.eventosService.getEventoById(id);
  }
}
