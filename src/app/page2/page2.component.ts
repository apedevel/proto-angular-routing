import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApdvLogger } from '../logging/apdv-logger';
import { ApdvLoggerFactory } from '../logging/apdv-logger-factory';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {

  private logger: ApdvLogger = this.loggerFactorySvc.getLogger({ context: 'Page2Component' });
  constructor(
    private loggerFactorySvc: ApdvLoggerFactory
  ) {
    if (this.logger.isTrace()) {
      this.logger.trace('constructor');
    }
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    if (this.logger.isTrace()) {
      this.logger.trace('destroy');
    }
  }

}
