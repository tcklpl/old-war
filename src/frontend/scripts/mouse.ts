class GameMouse {

    x!: number;
    y!: number;

    constructor() {
        this.registerEvent();
    }

    registerEvent(): void {
        $(document).on("mousemove", event => {
            this.x = event.pageX;
            this.y = event.pageY;
        });
    }
}

export { GameMouse }