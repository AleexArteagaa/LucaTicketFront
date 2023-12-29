import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventoPopupComponent } from './editar-evento-popup.component';
import { MatCard } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditarEventoPopupComponent', () => {
  let component: EditarEventoPopupComponent;
  let fixture: ComponentFixture<EditarEventoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarEventoPopupComponent],
      imports: [MatCard,
        HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEventoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
