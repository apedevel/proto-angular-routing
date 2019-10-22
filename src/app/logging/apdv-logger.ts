export abstract class ApdvLogger {

    abstract trace(val: any): void;

    abstract isTrace(): boolean;

    abstract debug(val: any): void;

    abstract isDebug(): boolean;

    abstract info(val: any): void;

    abstract isInfo(): boolean;

    abstract warn(val: any): void;

    abstract isWarn(): boolean;

    abstract error(val: any): void;

    abstract isError(): boolean;
}
