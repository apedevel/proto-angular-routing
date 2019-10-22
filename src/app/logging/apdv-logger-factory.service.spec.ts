import { TestBed } from '@angular/core/testing';

import { ApdvLoggerFactoryService } from './apdv-logger-factory.service';

describe('ApdvLoggerFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApdvLoggerFactoryService = TestBed.get(ApdvLoggerFactoryService);
    expect(service).toBeTruthy();
  });
});
