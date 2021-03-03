import { TestBed } from '@angular/core/testing';

import { MemeserviceService } from './memeservice.service';

describe('MemeserviceService', () => {
  let service: MemeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
