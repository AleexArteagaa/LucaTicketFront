import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasListComponent } from './entradas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EntradasListComponent', () => {
  let component: EntradasListComponent;
  let fixture: ComponentFixture<EntradasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasListComponent],
      imports: [ 
        HttpClientTestingModule
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
