import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCiudadListComponent } from './eventos-ciudad-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventosCiudadListComponent', () => {
  let component: EventosCiudadListComponent;
  let fixture: ComponentFixture<EventosCiudadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventosCiudadListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosCiudadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
