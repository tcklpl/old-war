import { GameRequest } from "./request"
import { GameRequestCallback } from "./request_callback";

class OptionRequest extends GameRequest {

    options: Array<string>;
    callback: GameRequestCallback<string>;

    constructor(description: string, options: Array<string>, callback: GameRequestCallback<string>) {
        super(description);
        this.options = options;
        this.callback = callback;
    }

    getAsJson(): string {
        let response = super.getAsJson() + '"request_type": "simple_option_request", "options": [';
        this.options.forEach(o => response += `"${o}",`);
        // remove last comma
        response = response.slice(0, -1);
        return response + "]}";
    }

    accept(a: string): void {
        if (this.options.indexOf(a) != -1) {
            this.callback.success(a);
        } else {
            this.callback.error("Invalid value");
        }
    }
}

export { OptionRequest }