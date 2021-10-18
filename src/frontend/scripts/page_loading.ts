import { game } from "./game";

class PageLoader {

    /**
     * Lists of parts to load in the game page.
     */
    partsToLoad: string[] = [
        'parts/lobby.html',
        'parts/room_selection.html',
        'parts/error_box.html'
    ];

    /**
     * Counter to hold the number of loaded files, is compared against partsToLoad.length.
     */
    loadedParts: number = 0;
    /**
     * Callback to be called when all the parts are loaded. Is defined in /frontend/game.html.
     */
    fullLoadCallback: (() => void) | undefined = undefined;
    /**
     * Callback for when a single file is loaded
     */
    loadedPartCallback: ((loadedParts: number) => void) | undefined = undefined;

    /**
     * Function to register that a part was loaded, is called below in requestAndAppendToDom.
     */
    registerLoadedPart(): void {
        this.loadedParts++;
        if (this.loadedPartCallback)
            this.loadedPartCallback(this.loadedParts);
        if (this.loadedParts == this.partsToLoad.length) {
            if (this.fullLoadCallback)
                this.fullLoadCallback();
        }
    }

    /**
     * Function to load a requested path and append to a DOM element.
     * @param {string}              path            The files path to request, load and append.
     * @param {Jquery DOM Element}  elementToInsert The DOM element to append the requested file.
     */
    requestAndAppendToDom(path: string, elementToInsert: JQuery<HTMLElement>): void {
        $.get(path, function(data) {
            elementToInsert.html(elementToInsert.html() + data);
            game.pageLoader.registerLoadedPart();
        });
    }

    /**
     * Function to be called to load all parts in the game page.
     */
    loadMainPage(): void {
        for (let part in this.partsToLoad) {
            this.requestAndAppendToDom(this.partsToLoad[part], $('#game_select'));
        }
    }
}

export { PageLoader }