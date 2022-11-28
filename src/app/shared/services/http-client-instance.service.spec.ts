import { TestBed } from '@angular/core/testing';

import { HttpClientInstanceService } from './http-client-instance.service';

describe('HttpClientInstanceService', () => {
  let service: HttpClientInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
