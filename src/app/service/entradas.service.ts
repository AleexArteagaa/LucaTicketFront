import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from '../model/tarjeta';

@Injectable({
  providedIn: 'root',
})
export class EntradasService {
  constructor(private http: HttpClient) {}

  private pagoUrl = 'localhost:8081/pago';

  public comprarEntrada(idUsuario: number, idEvento: number, tarjeta: Tarjeta) {
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario.toString());
    params = params.append('idEvento', idEvento.toString());

    var url = this.pagoUrl + '?idUsuario=' + idUsuario + '&idEvento=' + idEvento;
    console.log(url);

    return this.http.post<any>(this.pagoUrl, tarjeta, { params });
  }
}
