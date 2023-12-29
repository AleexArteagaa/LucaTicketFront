import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListComponent } from './eventos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventosListComponent', () => {
  let component: EventosListComponent;
  let fixture: ComponentFixture<EventosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventosListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
