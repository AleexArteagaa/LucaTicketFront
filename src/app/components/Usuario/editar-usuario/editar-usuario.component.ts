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
    const fecha = new Date(this.usuario.fechaAlta);

    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
    
    this.usuario.fechaAlta=fechaFormateada;
    this.userService.editarUsuario(this.usuario.id, this.usuario).subscribe(
      (response) => {
        console.log('Usuario editado:', response); 
        this.usuario = new Usuario();
        this.irAUsuarios();
      },
      (error) => {
        console.error('Error al editar usuario:', error);
      }
    );
  }

  public irAUsuarios() {
    this.router.navigate(['/usuarios']);
  }

}
