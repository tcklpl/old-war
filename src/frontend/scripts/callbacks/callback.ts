class Callback {

    private finite: boolean;
    private usesLeft: number;
    protected toCall: (...args: any[]) => void;

    constructor(toCall: (...args: any[]) => void, uses?: number) {
        this.toCall = toCall;
        this.usesLeft = uses || 0;
        this.finite = uses != undefined;
    }

    protected decreaseUsesIfFinite(): void {
        if (this.finite)
            this.usesLeft--;
    } 

    call(msg: string, ...args: any[]): void {
        this.decreaseUsesIfFinite();
        this.toCall(args);
    }

    shouldRemove(): boolean {
        return this.finite && this.usesLeft <= 0;
    }

}

export { Callback }