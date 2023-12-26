import { LocalDate } from 'js-joda'; 
export class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  contrasenia: string;
  fechaAlta: LocalDate;

  constructor() {
    this.id = 0; 
    this.nombre = '';
    this.apellido = '';
    this.mail = '';
    this.contrasenia = '';
    this.fechaAlta = LocalDate.now();
  }
}