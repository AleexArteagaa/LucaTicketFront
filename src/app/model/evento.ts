import { LocalDate, LocalTime } from 'js-joda';
import { Recinto } from './recinto';

export class Evento {
  id: number;
  nombre: string;
  descripcionCorta: string;
  descripcionExtendida: string;
  foto: string;
  fechaEvento: LocalDate;
  horaEvento: LocalTime;
  precioMinimo: string;
  precioMaximo: string;
  normas: string;
  recinto: Recinto;


  constructor() {
    this.id = 0; 
    this.nombre = '';
    this.descripcionCorta = '';
    this.descripcionExtendida = '';
    this.foto = '';
    this.fechaEvento = LocalDate.now();
    this.horaEvento = LocalTime.now(); 
    this.precioMinimo = '';
    this.precioMaximo = '';
    this.normas = '';
    this.recinto = new Recinto;
  }

}
