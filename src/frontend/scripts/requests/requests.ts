interface RequestContainer {
    request_uuid: string;
    description: string;
    request_type: string;
    specific: any[];
}

class RequestManager {
    
    private requestQueue: Array<RequestContainer> = [];
    private isProcessingRequest: boolean = false;
    private currentRequest: RequestContainer | undefined = undefined;

    private descriptionCallbacks: Map<string, (request: RequestContainer) => void> = new Map();
    private requestTypeCallbacks: Map<string, (request: RequestContainer) => void> = new Map();

    /**
     * 
     * @param {string} request  The string received from the server. These requests follow the model:
     *      
     * {"request_uuid": "<UUID>","description": "<REQUEST DESCRIPTION>", "request_type": "<REQUEST TYPE>", ...<OPTIONS SPECIFIC PER REQUEST TYPE>}
     */
    acceptRequest(request: string): void {
        const jsonReq: RequestContainer = JSON.parse(request);
        this.requestQueue.push(jsonReq);
        if (!this.isProcessingRequest) {
            this.proccessNextRequest();
        }
    }

    proccessNextRequest(): void {

        this.currentRequest = this.requestQueue.shift();
        if (this.currentRequest == null) return;

        let callback: ((request: RequestContainer) => void) | undefined = this.descriptionCallbacks.get(this.currentRequest.description);
        if (callback == undefined) {
            callback = this.requestTypeCallbacks.get(this.currentRequest.request_type);
        }

        if (callback != undefined) {
            callback(this.currentRequest);
            this.isProcessingRequest = true;
        }
    }
}

export { RequestManager, RequestContainer }