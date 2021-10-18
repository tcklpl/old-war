class GameRequestCallback<Type> {
    
    success: (value: Type) => void;
    error: (info: string) => void;

    constructor(success: (value: Type) => void, error: (info: string) => void) {
        this.success = success;
        this.error = error;
    }
}

export { GameRequestCallback }