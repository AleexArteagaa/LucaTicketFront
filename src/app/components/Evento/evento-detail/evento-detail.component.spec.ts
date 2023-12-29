import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailComponent } from './evento-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventoDetailComponent', () => {
  let component: EventoDetailComponent;
  let fixture: ComponentFixture<EventoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventoDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
