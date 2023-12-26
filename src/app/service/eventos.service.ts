import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../model/evento';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http:HttpClient) {}

  private eventosUrl = 'http://localhost:8081/evento';

  public getEventos() {
    return this.http.get<Evento[]>(this.eventosUrl);
  }
}
