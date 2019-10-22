import { TestBed } from '@angular/core/testing';

import { ApdvConsoleLoggerService } from './apdv-console-logger.service';

describe('ApdvConsoleLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApdvConsoleLoggerService = TestBed.get(ApdvConsoleLoggerService);
    expect(service).toBeTruthy();
  });
});
