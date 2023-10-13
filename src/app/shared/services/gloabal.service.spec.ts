import { TestBed } from '@angular/core/testing';

import { GloabalService } from './gloabal.service';

describe('GloabalService', () => {
  let service: GloabalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GloabalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
