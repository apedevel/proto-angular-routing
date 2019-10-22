import { ApdvLoggerBase } from './apdv-logger-base';
import { ApdvLoggerLogLevel } from './apdv-logger-log-level.enum';
import { ApdvLoggerOptions } from './apdv-logger-options';

const defaultOptions: ApdvLoggerOptions = {
  context: null,
};

export class ApdvConsoleLoggerService extends ApdvLoggerBase {

  private options: ApdvLoggerOptions;

  constructor(optionsParam: ApdvLoggerOptions) {
    super();

    this.options = Object.assign({}, defaultOptions, optionsParam);
  }

  trace(val: any): void {
    if (this.isTrace()) {
      this.log(val);
    }
  }
  isTrace(): boolean {
    return this.isCurrentLogLevel(ApdvLoggerLogLevel.TRACE);
  }
  debug(val: any): void {
    if (this.isDebug()) {
      this.log(val);
    }
  }
  isDebug(): boolean {
    return this.isCurrentLogLevel(ApdvLoggerLogLevel.DEBUG);
  }
  info(val: any): void {
    if (this.isInfo()) {
      this.log(val);
    }
  }
  isInfo(): boolean {
    return this.isCurrentLogLevel(ApdvLoggerLogLevel.INFO);
  }
  warn(val: any): void {
    if (this.isInfo()) {
      this.log(val);
    }
  }
  isWarn(): boolean {
    return this.isCurrentLogLevel(ApdvLoggerLogLevel.WARN);
  }
  error(val: any): void {
    if (this.isError()) {
      this.log(val);
    }
  }
  isError(): boolean {
    return this.isCurrentLogLevel(ApdvLoggerLogLevel.ERROR);
  }

  private log(val: any) {
    if (console.group && null != this.options.context) {
      console.group(this.options.context);
    }

    console.log(val);

    if (console.groupEnd && null != this.options.context) {
      console.groupEnd();
    }
  }


}
