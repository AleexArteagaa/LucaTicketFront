import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasCompraComponent } from './entradas-compra.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EntradasCompraComponent', () => {
  let component: EntradasCompraComponent;
  let fixture: ComponentFixture<EntradasCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasCompraComponent],
      imports: [ 
        HttpClientTestingModule
      ],
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
