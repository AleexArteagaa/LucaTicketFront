import { Component } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css',
})
export class DetalleUsuarioComponent {
  usuario!: Usuario;

  constructor(
    private route: ActivatedRoute,
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
}
