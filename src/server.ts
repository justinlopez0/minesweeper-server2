import { WebSocketServer } from "ws";
import { EventHandler } from "./event-handler";

export class Server {
    protected config: object;

    protected wss: WebSocketServer;

    protected eventHandler: EventHandler = new EventHandler();

    constructor(wss: WebSocketServer, config: object) {
        this.wss = wss;
        this.config = config;
    }
    
    on(event: string, callback: Function) {
        switch (event) {
            case 'test':
                console.log('test event');
                break;
        }
        callback('done!');
    }
    
    setup() {
        this.wss.on('message', (data) => {
            this.eventHandler.handle(data);
        });
    }
}