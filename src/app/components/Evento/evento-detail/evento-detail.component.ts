import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../model/evento';
import { EventosService } from '../../../service/eventos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrl: './evento-detail.component.css'
})
export class EventoDetailComponent {

  evento!: Evento;

  constructor(private route: ActivatedRoute, private eventosService: EventosService, private router: Router) {
    console.log("----------Componente DetalleEvento inicializado. Elegido Evento.");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const eventoId = Number(params.get('id'));
      if (!isNaN(eventoId)) {
        this.eventosService.getEventoById(eventoId).subscribe((data) => {
          this.evento = data;
        });
      }
    });
  }

  public volverListado() {
    this.router.navigate(['/eventos']);
  }
}
