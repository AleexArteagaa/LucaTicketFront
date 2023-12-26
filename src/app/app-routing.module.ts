import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { UsuariosListComponent } from './components/Usuario/usuarios-list/usuarios-list.component';
import { AltaUsuarioComponent } from './components/Usuario/alta-usuario/alta-usuario.component';

const routes: Routes = [
  { 
    path: 'eventos', 
    component: EventosListComponent 
  },
  { 
    path: 'usuarios', 
    component: UsuariosListComponent
  },
  { 
    path: 'alta-usuario', 
    component: AltaUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
