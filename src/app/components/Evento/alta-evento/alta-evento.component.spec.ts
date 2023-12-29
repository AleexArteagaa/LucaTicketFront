import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AltaEventoComponent } from './alta-evento.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GifFotoService } from '../../../service/gif-foto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Agrega el import para HttpClientTestingModule
import { EventosService } from '../../../service/eventos.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Componente AltaEvento', () => {
  let component: AltaEventoComponent;
  let fixture: ComponentFixture<AltaEventoComponent>;
  let eventosServiceSpy: jasmine.SpyObj<EventosService>;

  beforeEach(() => {
    eventosServiceSpy = jasmine.createSpyObj('EventosService', ['altaEvento']);

    TestBed.configureTestingModule({
      declarations: [AltaEventoComponent],
      imports: [FormsModule, HttpClientTestingModule], 
      providers: [
        { provide: EventosService, useValue: eventosServiceSpy },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } },
        { provide: MatDialog, useClass: class { open = jasmine.createSpy('open'); } },
        { provide: GifFotoService, useClass: class { get = jasmine.createSpy('get').and.returnValue(of('')); } },
      ],
    });

    fixture = TestBed.createComponent(AltaEventoComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el objeto evento', () => {
    expect(component.evento).toBeDefined();
  });

  it('debería actualizar evento.nombre cuando cambia el input', waitForAsync(() => {
    const nombreInput: HTMLInputElement = fixture.nativeElement.querySelector('#nombre');
    
    fixture.whenStable().then(() => {
      nombreInput.value = '';
      nombreInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.evento.nombre).toBe('');
    });
  }));

  it('debería llamar al método altaEvento cuando se hace clic en el botón', () => {
    spyOn(component, 'altaEvento');

    const buttonElement: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();

    expect(component.altaEvento).toHaveBeenCalledWith(component.evento);
  });

  it('debería navegar a "/eventos" al llamar al método volverAListado', () => {
    spyOn(component.router, 'navigate');

    component.volverAListado();

    expect(component.router.navigate).toHaveBeenCalledWith(['/eventos']);
  });
});