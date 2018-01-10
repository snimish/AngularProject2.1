import { TestBed, inject } from '@angular/core/testing';

import { MarvelDataService } from './marvel-data.service';

describe('MarvelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelDataService]
    });
  });

  it('should ...', inject([MarvelDataService], (service: MarvelDataService) => {
    expect(service).toBeTruthy();
  }));
});
