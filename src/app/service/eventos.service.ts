import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../model/evento';
import { EventoAlta } from '../model/evento-alta';


@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}

  private eventosUrl = 'http://localhost:3333/evento';

  public getEventos() {
    return this.http.get<Evento[]>(this.eventosUrl);
  }

  public findByCiudad(ciudad: string) {
    return this.http.get<Evento[]>(this.eventosUrl + '/ciudad/' + ciudad);
  }

  public deleteEvento(evento: Evento) {
    console.log("Entra en el servicio de borrar evento y esta es la ruta para borrar: " + this.eventosUrl + '/' + evento.id);
    return this.http.delete(this.eventosUrl + '/' + evento.id);
  }

  public getEventoById(id: number){
    return this.http.get<Evento>(this.eventosUrl + "/" + id);
  }

  public altaEvento(evento:EventoAlta) {
    return this.http.post<Evento>(this.eventosUrl, evento);
  }

  public editarEvento(eventoId: number, evento: EventoAlta){
    return this.http.put<Evento>(this.eventosUrl + "/" + eventoId, evento);
  }
}
