import { LocalDate, LocalTime } from 'js-joda';

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
  recinto: string;


  constructor() {
    this.id = 0; // o cualquier otro valor por defecto
    this.nombre = '';
    this.descripcionCorta = '';
    this.descripcionExtendida = '';
    this.foto = '';
    this.fechaEvento = LocalDate.now(); // o cualquier otra inicialización adecuada
    this.horaEvento = LocalTime.now(); // o cualquier otra inicialización adecuada
    this.precioMinimo = '';
    this.precioMaximo = '';
    this.normas = '';
    this.recinto = '';
  }

}
