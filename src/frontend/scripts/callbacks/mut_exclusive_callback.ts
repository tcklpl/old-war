import { Callback } from "./callback";

class MutuallyExclusiveCallback extends Callback {

    private msg1: string;
    private msg2: string;
    private toCall2: (...args: any[]) => void;

    constructor(msg1: string, toCall1: (...args: any[]) => void, msg2: string, toCall2: (...args: any[]) => void, uses?: number) {
        super(toCall1, uses);
        this.msg1 = msg1;
        this.msg2 = msg2;
        this.toCall2 = toCall2;
    }

    call(msg: string, ...args: any[]): void {
        this.decreaseUsesIfFinite();
        if (msg === this.msg1)
            this.toCall(args);
        else if (msg === this.msg2)
            this.toCall2(args);
    }

}

export { MutuallyExclusiveCallback }