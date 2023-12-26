import { LocalDate } from 'js-joda'; // Asegúrate de importar la librería adecuada para manejar fechas en TypeScript

export class UsuarioDTO {
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  contrasenia: string;
  fechaAlta: LocalDate;

  constructor() {
    this.id = 0; // o cualquier otro valor por defecto
    this.nombre = '';
    this.apellido = '';
    this.mail = '';
    this.contrasenia = '';
    this.fechaAlta = LocalDate.now();
  }
}