import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosListComponent } from './components/Evento/eventos-list/eventos-list.component';
import { FormsModule } from '@angular/forms';
import { UsuariosListComponent } from './components/Usuario/usuarios-list/usuarios-list.component';
import { AltaUsuarioComponent } from './components/Usuario/alta-usuario/alta-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { AltaEventoComponent } from './components/Evento/alta-evento/alta-evento.component';
import { DetalleUsuarioComponent } from './components/Usuario/detalle-usuario/detalle-usuario.component';
import { EventoDetailComponent } from './components/Evento/evento-detail/evento-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaUsuarioPopupComponent } from './components/Usuario/alta-usuario-popup/alta-usuario-popup.component';
import { EventosCiudadListComponent } from './components/Evento/eventos-ciudad-list/eventos-ciudad-list.component';
import { EditarEventoComponent } from './components/Evento/editar-evento/editar-evento.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    EventosListComponent,
    EventoDetailComponent,
    UsuariosListComponent,
    AltaUsuarioComponent,
    HomeComponent,
    AltaEventoComponent,
    DetalleUsuarioComponent,
    AltaUsuarioPopupComponent,
    EventosCiudadListComponent,
    EditarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
