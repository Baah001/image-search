import { TestBed } from '@angular/core/testing';

import { LinksHttpClientService } from './links-http-client.service';

describe('LinksHttpClientService', () => {
  let service: LinksHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
