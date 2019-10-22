import { Injectable } from '@angular/core';
import { ApdvConsoleLoggerService } from './apdv-console-logger.service';
import { ApdvLogger } from './apdv-logger';
import { ApdvLoggerFactory } from './apdv-logger-factory';
import { ApdvLoggerOptions } from './apdv-logger-options';

@Injectable()
export class ApdvLoggerFactoryService extends ApdvLoggerFactory {
  constructor() {
    super();
  }

  getLogger(options?: ApdvLoggerOptions): ApdvLogger {
    return new ApdvConsoleLoggerService(options);
  }
}
