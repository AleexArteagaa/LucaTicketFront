import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCiudadListComponent } from './eventos-ciudad-list.component';

describe('EventosCiudadListComponent', () => {
  let component: EventosCiudadListComponent;
  let fixture: ComponentFixture<EventosCiudadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventosCiudadListComponent]
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
