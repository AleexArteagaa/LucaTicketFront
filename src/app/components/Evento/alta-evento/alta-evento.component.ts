import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Router } from '@angular/router';
import { EventoAlta } from '../../../model/evento-alta';

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
    this.eventoService.altaEvento(this.evento)
      .subscribe(data => {
        alert("Usuario generado de forma correcta.");
      });

  };

  ngOnInit(): void {
  }

}
