import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntradasService } from './entradas.service';

describe('EntradasService', () => {
  let service: EntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
