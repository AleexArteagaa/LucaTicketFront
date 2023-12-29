import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventoComponent } from './editar-evento.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
describe('EditarEventoComponent', () => {
  let component: EditarEventoComponent;
  let fixture: ComponentFixture<EditarEventoComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);


    await TestBed.configureTestingModule({
      declarations: [EditarEventoComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar al listado de eventos', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.volverAlListado();

    expect(navigateSpy).toHaveBeenCalledWith(['/eventos']);
  });

});
