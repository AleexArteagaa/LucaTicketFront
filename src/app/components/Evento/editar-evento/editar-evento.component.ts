import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../model/evento';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../service/eventos.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { Recinto } from '../../../model/recinto';
import { EventoAlta } from '../../../model/evento-alta';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css'
})
export class EditarEventoComponent implements OnInit {
  evento!: Evento;
  eventoEdit: EventoAlta = new EventoAlta();
  eventoId!: number;

  constructor(private route: ActivatedRoute, private eventosService: EventosService, private fb: FormBuilder, private router: Router) {
    console.log("----------Componente EditarEvento inicializado.");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventoId = Number(params.get('id'));
      if (!isNaN(this.eventoId)) {
        this.eventosService.getEventoById(this.eventoId).subscribe((data) => {
          this.evento = data;
        });
      }
    });
  }

  editarEvento(valores: any) {

    const fecha = new Date(valores.fechaEvento);

    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    console.log("-----EDITAR EVENTO " + this.eventoId);
    this.eventoEdit.nombre = valores.nombre;
    this.eventoEdit.descripcionCorta = valores.desCorta;
    this.eventoEdit.descripcionExtendida = valores.desExtendida;
    this.eventoEdit.foto = valores.foto;
    this.eventoEdit.fechaEvento = fechaFormateada;
    this.eventoEdit.horaEvento = valores.horaEvento;
    this.eventoEdit.precioMinimo = valores.precioMinimo.substring(0, valores.precioMinimo.length - 2);
    this.eventoEdit.precioMaximo = valores.precioMaximo.substring(0, valores.precioMaximo.length - 2);
    this.eventoEdit.normas = valores.normas;
    this.eventoEdit.recinto = valores.nombreRecinto;

    this.eventosService.editarEvento(this.eventoId, this.eventoEdit)
      .subscribe(data => {
        console.log("Evento editado correctamente.");
        alert("Evento editado correctamente.");
        this.volverAlListado();
      });
  }

  public volverAlListado() {
    this.router.navigate(['/eventos']);
  }
}
