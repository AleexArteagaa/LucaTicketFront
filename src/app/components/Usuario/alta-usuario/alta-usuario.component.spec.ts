import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaUsuarioComponent } from './alta-usuario.component';
import { UsuariosService } from '../../../service/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { Usuario } from '../../../model/usuario';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AltaUsuarioComponent', () => {
  let component: AltaUsuarioComponent;
  let fixture: ComponentFixture<AltaUsuarioComponent>;
  let mockUsuariosService: jasmine.SpyObj<UsuariosService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockUsuariosService = jasmine.createSpyObj('UsuariosService', [
      'createUser',
    ]);
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AltaUsuarioComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AltaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new user', () => {
    const mockUser = Object.assign(new Usuario(), {
      id: 0,
      nombre: 'John',
      apellido: 'Doe',
      mail: 'john@example.com',
      contrasenia: '123456',
      fechaAlta: '29-12-2023',
    });

    mockUsuariosService.createUser.and.returnValue(of(new Usuario()));

    component.usuario = mockUser;
    component.guardarUsuario();

    expect(mockUsuariosService.createUser).toHaveBeenCalledWith(mockUser);
    expect(component.usuario).toEqual(new Usuario());
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/usuarios']);
    expect(mockMatDialog.open).toHaveBeenCalled();
  });

  it('should initialize an empty user', () => {
    expect(component.usuario.id).toBe(0);
    expect(component.usuario.nombre).toBe('');
    expect(component.usuario.apellido).toBe('');
    expect(component.usuario.mail).toBe('');
    expect(component.usuario.contrasenia).toBe('');
  });

  it('should handle error when no specific message is provided', () => {
    const errorResponse = { error: { message: null } };
    mockUsuariosService.createUser.and.returnValue(throwError(errorResponse));

    spyOn(console, 'error');

    component.guardarUsuario();

    expect(console.error).toHaveBeenCalledWith(
      'Error desconocido:',
      errorResponse
    );
  });

  it('should display error messages if available', () => {
    const errorResponse = { error: { message: ['Error al crear usuario'] } };
    mockUsuariosService.createUser.and.returnValue(throwError(errorResponse));

    spyOn(window, 'alert');

    component.guardarUsuario();

    expect(window.alert).toHaveBeenCalledWith(
      'Error/es:\n\n• Error al crear usuario\n'
    );
  });
});
