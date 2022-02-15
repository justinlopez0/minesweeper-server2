import { WebSocket } from "ws";
import { EventHandler } from "./event-handler";

export class Client {
    protected ws: WebSocket;
    
    protected id: string;

    protected eventHandler: EventHandler = EventHandler.getInstance();

    constructor(ws: WebSocket) {
        this.ws = ws;
        this.id = this.generateId();
        this.setupEventHandler();
    }

    setupEventHandler() {
        this.ws.on('message', data => {
            const parsedData = JSON.parse(data.toString());
            this.eventHandler.handle(parsedData);
        })
    }

    setWebSocket(ws: WebSocket) {
        this.ws = ws;
    }

    getWebSocket() : WebSocket {
        return this.ws;
    }

    protected generateId() : string {
        let s4 = () => { 
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4();
    }

    disconnect() {
        this.ws.close();
    }

    heartBeat() {
        
    }
}