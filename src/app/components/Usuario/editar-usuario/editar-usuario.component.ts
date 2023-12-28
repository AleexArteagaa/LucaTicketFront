import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit{

  usuario!: Usuario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      if (!isNaN(userId)) {
        this.userService.getUserById(userId).subscribe((data) => {
          this.usuario = data;
        });
      }
    });
  }

  guardarCambios() {
    let mensajesError: string[] = [];
    this.userService.editarUsuario(this.usuario.id, this.usuario).subscribe(
      (response) => {
        this.usuario = new Usuario();
        this.irAUsuarios();
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

  public irAUsuarios() {
    this.router.navigate(['/usuarios']);
  }

}
