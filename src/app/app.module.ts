import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { FormsModule } from '@angular/forms';
import { EventoDetailComponent } from './components/evento-detail/evento-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosListComponent,
    EventoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
