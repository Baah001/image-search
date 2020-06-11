import { TestBed } from '@angular/core/testing';

import { LinksHttpClientService } from './links-http-client.service';
import {HttpClientModule} from '@angular/common/http';

describe('LinksHttpClientService', () => {
  let service: LinksHttpClientService;

  beforeEach(() => {
	TestBed.configureTestingModule({
		imports: [HttpClientModule]
	});
	service = TestBed.inject(LinksHttpClientService);
  });

  it('should be created', () => {
	expect(service).toBeTruthy();
  });
});
