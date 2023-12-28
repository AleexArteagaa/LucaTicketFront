import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasListComponent } from './entradas-list.component';

describe('EntradasListComponent', () => {
  let component: EntradasListComponent;
  let fixture: ComponentFixture<EntradasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasListComponent]
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
