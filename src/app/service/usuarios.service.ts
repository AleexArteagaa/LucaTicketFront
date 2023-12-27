import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  private userUrl = 'http://demo-service-env.eba-rhzridzm.eu-west-3.elasticbeanstalk.com/usuario';
  //private userUrl = 'http://localhost:5000/usuario';

  public getUsers() {
    console.log("entra en get users");
    return this.http.get<Usuario[]>(this.userUrl);
  }

  public deleteUser(user: Usuario) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user: Usuario) {
    return this.http.post<Usuario>(this.userUrl, user);
  }

  public editarUsuario(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(this.userUrl + '/' + id, usuario);
  }

  public getUserById(id:number){
    return this.http.get<Usuario>(this.userUrl + '/' + id);
  }
}
