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

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public getMail(): string {
    return this.mail;
  }

  public setMail(mail: string): void {
    this.mail = mail;
  }

  public getContrasenia(): string {
    return this.contrasenia;
  }

  public setContrasenia(contrasenia: string): void {
    this.contrasenia = contrasenia;
  }

  public getFechaAlta(): LocalDate {
    return this.fechaAlta;
  }

  public setFechaAlta(fechaAlta: LocalDate): void {
    this.fechaAlta = fechaAlta;
  }
}