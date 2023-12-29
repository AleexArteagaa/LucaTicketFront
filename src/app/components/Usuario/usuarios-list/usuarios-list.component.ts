import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from '../../../model/usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css',
})
export class UsuariosListComponent implements OnInit {
  users: Usuario[] = [];

  constructor(private router: Router, private userService: UsuariosService) {}

  ngOnInit(): void {
    if (this.users.length == 0) {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    }
  }

  deleteUser(user: Usuario): void {
    this.userService.deleteUser(user).subscribe((data) => {
      alert("Usuario eliminado correctamente");
      this.users = this.users.filter((u) => u !== user);
    });
  }

  public getUserDetails(userId: number) {
    this.router.navigate(['/usuarios', userId]);
  }

  public editarUsuario(userId: number) {
    this.router.navigate(['/editar-usuario', userId]);
  }

  public irAltaUsuario() {
    this.router.navigate(['/alta-usuario']);
  }
}
