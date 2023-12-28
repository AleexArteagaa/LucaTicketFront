import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifFotoService {

  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=o35gfEnLweBrbTLKulkg7W5cJ7D7Fz7O&limit=1&q=';

  constructor(public http: HttpClient) { }

  async get(searchTerm: string): Promise<string> {
    const apiLink = this.giphyApi + searchTerm;
  
    try {
      const response: any = await this.http.get(apiLink).toPromise();
  
      if (response.data.length > 0) {
        return response.data[0].images.original.url;
      } else {
        return 'https://i.gifer.com/Qgyn.gif';
      }
    } catch (error) {
      console.error('Error al obtener el gif:', error);
      return 'https://i.gifer.com/Qgyn.gif'; // Puedes manejar el error de acuerdo a tus necesidades
    }
  }
  
}
