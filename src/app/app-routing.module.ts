import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './components/Evento/eventos-list/eventos-list.component';
import { UsuariosListComponent } from './components/Usuario/usuarios-list/usuarios-list.component';
import { AltaUsuarioComponent } from './components/Usuario/alta-usuario/alta-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleUsuarioComponent } from './components/Usuario/detalle-usuario/detalle-usuario.component';
import { EventosCiudadListComponent } from './components/Evento/eventos-ciudad-list/eventos-ciudad-list.component';

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
    path: 'eventos/ciudad/:ciudad', 
    component: EventosCiudadListComponent 
  },
  { 
    path: 'usuarios', 
    component: UsuariosListComponent
  },
  { 
    path: 'alta-usuario', 
    component: AltaUsuarioComponent
  },
  { path: 'usuarios/:id', 
    component: DetalleUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
