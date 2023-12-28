import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Router } from '@angular/router';
import { EventoAlta } from '../../../model/evento-alta';
import { DateTimeFormatter, LocalDate } from 'js-joda';

@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrl: './alta-evento.component.css'
})
export class AltaEventoComponent implements OnInit {


  evento: EventoAlta = new EventoAlta();

  constructor(private router: Router, private eventoService: EventosService) {

  }

  altaEvento(): void {
    
    const fecha = new Date(this.evento.fechaEvento);
  
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-'); 
  
    this.evento.fechaEvento = fechaFormateada;
  
    console.log(this.evento.fechaEvento);
  
    this.eventoService.altaEvento(this.evento)
      .subscribe(data => {
        alert("Evento generado de forma correcta.");
      });
  }

  volverAListado() {
    this.router.navigate(['/eventos']);
  }

  ngOnInit(): void {
  }

}
