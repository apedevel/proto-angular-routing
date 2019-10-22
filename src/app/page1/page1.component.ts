import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApdvLogger } from '../logging/apdv-logger';
import { ApdvLoggerFactory } from '../logging/apdv-logger-factory';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  private logger: ApdvLogger = this.loggerFactorySvc.getLogger({ context: 'Page1Component' });
  constructor(
    private loggerFactorySvc: ApdvLoggerFactory
  ) {
    if (this.logger.isTrace()) {
      this.logger.trace('constructor');
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {

    if (this.logger.isTrace()) {
      this.logger.trace('destroy');
    }

  }

}
