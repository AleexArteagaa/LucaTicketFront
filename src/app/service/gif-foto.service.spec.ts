import { TestBed } from '@angular/core/testing';
import { GifFotoService } from './gif-foto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GifFotoService', () => {
  let service: GifFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GifFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
