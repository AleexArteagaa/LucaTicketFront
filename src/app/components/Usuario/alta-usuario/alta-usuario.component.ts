import { Component } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { AltaUsuarioPopupComponent } from '../alta-usuario-popup/alta-usuario-popup.component';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css'],
})
export class AltaUsuarioComponent {
  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private userService: UsuariosService,
    public dialog: MatDialog
  ) {}

  guardarUsuario() {
    let mensajesError: string[] = [];

    this.userService.createUser(this.usuario).subscribe(
      (response) => {
        this.usuario = new Usuario();
        this.volverAListado();
        this.openPopup();
      },
      (error) => {
        if (error.error && error.error.message) {
          mensajesError = error.error.message;
          this.mostrarAlertaErrores(mensajesError); 
        } else {
          console.error('Error desconocido:', error);
        }
      }
    );
  }

  mostrarAlertaErrores(mensajesError: string[]) {
    let mensajeAlerta = 'Error/es:\n\n';
    mensajesError.forEach((mensaje) => {
      mensajeAlerta += `• ${mensaje}\n`;
    });
    alert(mensajeAlerta);
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AltaUsuarioPopupComponent, {
      width: '250px',
    });

    setTimeout(() => {
      dialogRef.close();
    }, 4000);
  }

  volverAListado() {
    this.router.navigate(['/usuarios']);
  }

  ngOnInit(): void {}
}
