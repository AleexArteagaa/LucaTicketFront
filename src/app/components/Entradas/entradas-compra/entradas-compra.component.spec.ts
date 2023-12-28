import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasCompraComponent } from './entradas-compra.component';

describe('EntradasCompraComponent', () => {
  let component: EntradasCompraComponent;
  let fixture: ComponentFixture<EntradasCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
