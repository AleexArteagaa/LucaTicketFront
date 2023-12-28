import { TestBed } from '@angular/core/testing';

import { GifFotoService } from './gif-foto.service';

describe('GifFotoService', () => {
  let service: GifFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
