
import { ApdvLogger } from './apdv-logger';
import { ApdvLoggerOptions } from './apdv-logger-options';

export abstract class ApdvLoggerFactory {
    abstract getLogger(options?: ApdvLoggerOptions): ApdvLogger;
}
