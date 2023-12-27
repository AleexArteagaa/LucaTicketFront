import { Component } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private userService: UsuariosService) {}

  guardarUsuario() {
    console.log(this.usuario.fechaAlta);
    this.userService.createUser(this.usuario).subscribe(
      (response) => {
        console.log('Usuario añadido:', response); 
        this.usuario = new Usuario();
      },
      (error) => {
        console.error('Error al añadir usuario:', error);
      }
    );
  }


  ngOnInit(): void {}
}
