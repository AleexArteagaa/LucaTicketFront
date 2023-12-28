import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../model/evento';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../../service/eventos.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { Recinto } from '../../../model/recinto';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css'
})
export class EditarEventoComponent implements OnInit {
  evento!: Evento;

  constructor(private route: ActivatedRoute, private eventosService: EventosService, private fb: FormBuilder) {
    console.log("----------Componente EditarEvento inicializado.");
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

  editarEvento(valores: any) {
    console.log("-----EDITAR EVENTO");
    this.evento.nombre=valores.nombre;
    this.evento.descripcionCorta=valores.desCorta;
    this.evento.descripcionExtendida=valores.desExtendida;
    this.evento.fechaEvento=valores.fechaEvento;
    this.evento.horaEvento=valores.horaEvento;
    this.evento.precioMinimo=valores.precioMinimo.substring(0,valores.precioMinimo.length-2);
    this.evento.precioMaximo=valores.precioMaximo.substring(0,valores.precioMaximo.length-2);
    this.evento.normas=valores.normas;
    this.evento.recinto=new Recinto(valores.nombreRecinto);

    this.eventosService.editarEvento(this.evento.id,this.evento)
      .subscribe(data => {
        console.log("Usuario editado correctamente.");
      });
  }
}
