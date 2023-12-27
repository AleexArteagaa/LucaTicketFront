import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './components/Evento/eventos-list/eventos-list.component';
import { UsuariosListComponent } from './components/Usuario/usuarios-list/usuarios-list.component';
import { AltaUsuarioComponent } from './components/Usuario/alta-usuario/alta-usuario.component';
import { EventoDetailComponent } from './components/Evento/evento-detail/evento-detail.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleUsuarioComponent } from './components/Usuario/detalle-usuario/detalle-usuario.component';
import { AltaEventoComponent } from './components/Evento/alta-evento/alta-evento.component';

const routes: Routes = [
  {
		path: '',
		component: HomeComponent
	},
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
  },
  { path: 'eventos/:id', 
    component: EventoDetailComponent 
  },
  { path: 'usuarios/:id', 
    component: DetalleUsuarioComponent
  },
  {
    path: 'alta-evento', 
    component: AltaEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
