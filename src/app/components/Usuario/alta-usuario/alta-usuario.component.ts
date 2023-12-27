import { Component } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { AltaUsuarioPopupComponent } from '../alta-usuario-popup/alta-usuario-popup.component';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private userService: UsuariosService, public dialog: MatDialog) {}

  guardarUsuario() {
    console.log(this.usuario.fechaAlta);
    this.userService.createUser(this.usuario).subscribe(
      (response) => {
        console.log('Usuario añadido:', response); 
        this.usuario = new Usuario();
        this.openPopup();
      },
      (error) => {
        console.error('Error al añadir usuario:', error);
      }
    );
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AltaUsuarioPopupComponent, {
      width: '250px',
    });

    setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }

  ngOnInit(): void {}
}
