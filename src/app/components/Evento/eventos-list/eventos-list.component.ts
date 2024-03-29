import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../../model/evento';
import { EventosService } from '../../../service/eventos.service';
import { EventoDetailComponent } from '../evento-detail/evento-detail.component';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.css',
})
export class EventosListComponent implements OnInit {
  eventos: Evento[] = [];
  cityName: string = '';

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

  public getEventoNombre(localidad: string) {
    console.log("entra en get evento por nombre");
    console.log(localidad);
    this.router.navigate(['/eventos/ciudad', localidad]);
  }

  deleteEvento(evento: Evento): void {
    this.eventosService.deleteEvento(evento).subscribe((data) => {
      alert("Evento eliminado correctamente");
      this.eventos = this.eventos.filter((u) => u !== evento);
    });
  }

  public irAltaEvento() {
    this.router.navigate(['/alta-evento']);
  }
  
  editarEvento(eventoId: Number): void{
    console.log("-----Entra en editar el evento con ID:" +eventoId );
    this.router.navigate(['/editar-evento', eventoId]);
  }
}
