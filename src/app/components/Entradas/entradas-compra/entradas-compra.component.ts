import { Component } from '@angular/core';
import { Tarjeta } from '../../../model/tarjeta';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../service/eventos.service';
import { Evento } from '../../../model/evento';
import { EntradasService } from '../../../service/entradas.service';

@Component({
  selector: 'app-entradas-compra',
  templateUrl: './entradas-compra.component.html',
  styleUrl: './entradas-compra.component.css',
})
export class EntradasCompraComponent {
  tarjeta: Tarjeta = new Tarjeta();
  evento!: Evento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventosService: EventosService,
    private entradasService: EntradasService
  ) {
    this.tarjeta.emisor = 'LucaTicket';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const eventoId = Number(params.get('id'));
      if (!isNaN(eventoId)) {
        this.eventosService.getEventoById(eventoId).subscribe((data) => {
          this.evento = data;
          this.tarjeta.cantidad = this.generarCantidadAleatoria(
            parseFloat(this.evento.precioMinimo.slice(0, -2)),
            parseFloat(this.evento.precioMaximo.slice(0, -2))
          );
          this.tarjeta.concepto = this.evento.nombre;
        });
      }
    });
  }

  comprarEntrada() {
    const idUsuario = 16;


    
    this.entradasService
      .comprarEntrada(idUsuario, this.evento.id, this.tarjeta)
      .subscribe(
        (response) => {
          if (response.status == '200.0001') {
            this.tarjeta = new Tarjeta();
            alert('Compra de entrada realizada correctamente');
            console.log(response.info);
            this.volverAEntradas();
          } else {
            alert(
              'Error: ' + response.error + '<br>Mensaje: ' + response.message
            );
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
    console.log('Detalles de la tarjeta:', this.tarjeta);
  }

  generarCantidadAleatoria(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public volverAEntradas() {
    this.router.navigate(['/entradas']);
  }
}
