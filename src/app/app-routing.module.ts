import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './components/Evento/eventos-list/eventos-list.component';
import { UsuariosListComponent } from './components/Usuario/usuarios-list/usuarios-list.component';
import { AltaUsuarioComponent } from './components/Usuario/alta-usuario/alta-usuario.component';
import { EventoDetailComponent } from './components/Evento/evento-detail/evento-detail.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleUsuarioComponent } from './components/Usuario/detalle-usuario/detalle-usuario.component';
import { AltaEventoComponent } from './components/Evento/alta-evento/alta-evento.component';
import { EventosCiudadListComponent } from './components/Evento/eventos-ciudad-list/eventos-ciudad-list.component';
import { EditarEventoComponent } from './components/Evento/editar-evento/editar-evento.component';
import { EditarUsuarioComponent } from './components/Usuario/editar-usuario/editar-usuario.component';
import { EntradasListComponent } from './components/Entradas/entradas-list/entradas-list.component';
import { EntradasCompraComponent } from './components/Entradas/entradas-compra/entradas-compra.component';

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
  { path: 'eventos/:id', 
    component: EventoDetailComponent 
  },
  { path: 'usuarios/:id', 
    component: DetalleUsuarioComponent
  },
  {
    path: 'alta-evento', 
    component: AltaEventoComponent
  },
  {
    path: 'editar-evento/:id',
    component: EditarEventoComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'entradas',
    component: EntradasListComponent
  },
  {
    path: 'entradas/:id',
    component: EntradasCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
