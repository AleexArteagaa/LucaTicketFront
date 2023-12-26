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

  public getId(): number {
    return this.id;
  }

  public setId(id: number ): void{
    this.id=id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void{
    this.nombre=nombre;
  }

  public getDescripcionCorta(): string{
    return this.descripcionCorta;
  }

  public setDescripcionCorta(descripcionCorta: string): void{
    this.descripcionCorta=descripcionCorta;
  }

  public getDescripcionExtendida(): string{
    return this.descripcionExtendida;
  }

  public setDescripcionExtendida(descripcionExtendida: string): void{
    this.descripcionExtendida=descripcionExtendida;
  }

  public getFoto(): string{
    return this.foto;
  }

  public setFoto(foto: string): void{
    this.foto=foto;
  }

  public getFechaEvento(): LocalDate{
    return this.fechaEvento;
  }

  public setFechaEvento(fechaEvento: LocalDate): void{
    this.fechaEvento=fechaEvento;
  }
  public getHoraEvento(): LocalTime{
    return this.horaEvento;
  }

  public setHoraEvento(horaEvento: LocalTime): void{
    this.horaEvento=horaEvento;
  }
  public getPrecioMinimo(): string{
    return this.precioMinimo;
  }

  public setPrecioMinimo(precioMinimo: string): void{
    this.precioMinimo=precioMinimo;
  }
  public getPrecioMaximo(): string{
    return this.precioMaximo;
  }

  public setPrecioMaximo(precioMaximo: string): void{
    this.precioMaximo=precioMaximo;
  }
  public getNormas(): string{
    return this.normas;
  }

  public setNormas(normas: string): void{
    this.normas=normas;
  }
  public getRecinto(): Recinto{
    return this.recinto;
  }

  public setRecinto(recinto: Recinto): void{
    this.recinto=recinto;
  }


}
