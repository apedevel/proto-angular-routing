import { ApdvLogger } from './apdv-logger';
import { ApdvLoggerLogLevel } from './apdv-logger-log-level.enum';

const APDV_LOG_LEVEL = 'APDV_LOG_LEVEL';

export abstract class ApdvLoggerBase extends ApdvLogger {

    protected isCurrentLogLevel(level: ApdvLoggerLogLevel): boolean {
        const levelValue = this.getLogLevelValue(level);
        return levelValue <= this.getCurrentLogLevelValue();
    }

    private getCurrentLogLevelValue(): number {
        const windowValue = window[APDV_LOG_LEVEL];
        if (null != windowValue && typeof windowValue === 'string') {
            return this.getLogLevelValue(<ApdvLoggerLogLevel>windowValue);
        }

        const storageValue = localStorage.getItem(APDV_LOG_LEVEL);
        if (null != storageValue && typeof storageValue === 'string') {
            return this.getLogLevelValue(<ApdvLoggerLogLevel>storageValue);
        }

        return this.getLogLevelValue(this.getDetaultLogLevel());
    }

    private getLogLevelValue(level: ApdvLoggerLogLevel): number {

        switch (level) {
            case ApdvLoggerLogLevel.OFF:
                return 0;
            case ApdvLoggerLogLevel.ERROR:
                return 10;
            case ApdvLoggerLogLevel.WARN:
                return 20;
            case ApdvLoggerLogLevel.INFO:
                return 30;
            case ApdvLoggerLogLevel.DEBUG:
                return 40;
            case ApdvLoggerLogLevel.TRACE:
                return 50;
            default:
                return 10;
        }
    }

    private getDetaultLogLevel(): ApdvLoggerLogLevel {
        return ApdvLoggerLogLevel.ERROR;
    }
}
