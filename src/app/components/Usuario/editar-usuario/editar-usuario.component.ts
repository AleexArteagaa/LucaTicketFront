import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { EditarUsuarioPopupComponent } from '../editar-usuario-popup.component/editar-usuario-popup.component';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit{

  usuario!: Usuario;
  dialog: any;

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
    console.log(this.usuario.fechaAlta);
    this.userService.editarUsuario(this.usuario.id, this.usuario).subscribe(
      (response) => {
        console.log('Usuario editado:', response); 
        this.usuario = new Usuario();
        this.openPopup();
        this.irAUsuarios();
      },
      (error) => {
        console.error('Error al editar usuario:', error);
      }
    );
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(EditarUsuarioPopupComponent, {
      width: '250px',
    });

    setTimeout(() => {
      dialogRef.close();
    }, 4000);
  }

  public irAUsuarios() {
    this.router.navigate(['/usuarios']);
  }

}
