import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuarioComponent } from './detalle-usuario.component';
import { RouterModule } from '@angular/router';

describe('DetalleUsuarioComponent', () => {
  let component: DetalleUsuarioComponent;
  let fixture: ComponentFixture<DetalleUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleUsuarioComponent],
      imports: [ 
        RouterModule.forRoot([])
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
