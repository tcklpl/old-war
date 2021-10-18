import { v4 as uuidv4 } from 'uuid';

abstract class GameRequest {
    uuid: string;
    description: string;

    constructor(description: string) {
        this.description = description;
        this.uuid = uuidv4();
    }

    getAsJson(): string {
        return `{"request_uuid": "${this.uuid}", "description": "${this.description}", `;
    }

    abstract accept(a: string): void;
}

export { GameRequest }
