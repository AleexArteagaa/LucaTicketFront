import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUsuarioPopupComponent } from './alta-usuario-popup.component';

describe('AltaUsuarioPopupComponent', () => {
  let component: AltaUsuarioPopupComponent;
  let fixture: ComponentFixture<AltaUsuarioPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaUsuarioPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaUsuarioPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
