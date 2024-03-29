import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Router } from '@angular/router';
import { EventoAlta } from '../../../model/evento-alta';
import { DateTimeFormatter, LocalDate } from 'js-joda';
import { MatDialog } from '@angular/material/dialog';
import { AltaEventoPopupComponent } from '../alta-evento-popup/alta-evento-popup.component';
import { GifFotoService } from '../../../service/gif-foto.service';

@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrl: './alta-evento.component.css',
})
export class AltaEventoComponent implements OnInit {
  evento: EventoAlta = new EventoAlta();
  constructor(
    public router: Router,
    private eventoService: EventosService,
    public dialog: MatDialog,
    private gifFoto: GifFotoService
  ) { }

  altaEvento(valores: any): void {
    let mensajesError: string[] = [];
    const fecha = new Date(this.evento.fechaEvento);

    const fechaFormateada = fecha
      .toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-');

    this.evento.fechaEvento = fechaFormateada;

    this.gifFoto.get(valores.foto)
      .then((url: string) => {
        this.evento.foto = url;
        console.log(this.evento.fechaEvento);

        this.eventoService.altaEvento(this.evento).subscribe(
          (response) => {
            this.evento = new EventoAlta();
            this.volverAListado();
            this.openPopup();
          },
          (error) => {
            if (error.error && error.error.message) {
              console.log(error.error);
              mensajesError = error.error.message;
              this.mostrarAlertaErrores(mensajesError); 
            } else {
              console.error('Error desconocido:', error);
            }
          }
        );
      });
  }

  mostrarAlertaErrores(mensajesError: string[]) {
    let mensajeAlerta = 'Error/es:\n\n';
    mensajesError.forEach((mensaje) => {
      mensajeAlerta += `• ${mensaje}\n`;
    });
    alert(mensajeAlerta);
  }

  volverAListado() {
    this.router.navigate(['/eventos']);
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AltaEventoPopupComponent, {
      width: '250px',
    });

    setTimeout(() => {
      dialogRef.close();
    }, 4000);
  }                                                    

  ngOnInit(): void {
  }
}
