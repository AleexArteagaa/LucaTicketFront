import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from '../../../model/usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent implements OnInit {
  users: Usuario[] = [];

  constructor(private router: Router, private userService: UsuariosService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(user: Usuario): void {
    this.userService.deleteUser(user).subscribe((data) => {
      this.users = this.users.filter((u) => u !== user);
    });
  }
}
