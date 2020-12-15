import { TestBed } from '@angular/core/testing';

import { HttpInerceptorService } from './http-inerceptor.service';

describe('HttpInerceptorService', () => {
  let service: HttpInerceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInerceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
