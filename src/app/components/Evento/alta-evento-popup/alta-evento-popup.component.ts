import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-alta-evento-popup',
  templateUrl: './alta-evento-popup.component.html',
  styleUrls: ['./alta-evento-popup.component.css'],
})
export class AltaEventoPopupComponent {}

@NgModule({
  imports: [
    MatCardModule,
    MatDialogModule,
  ],
  declarations: [
    AltaEventoPopupComponent,
  ],
})
export class AltaEventoPopupModule { }
