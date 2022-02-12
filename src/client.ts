import { WebSocket } from "ws";

export class Client {
    protected ws: WebSocket;
    protected id: string;

    constructor(ws: WebSocket) {
        this.ws = ws;
        this.id = this.generateId();
    }

    setWebSocket(ws: WebSocket) {
        this.ws = ws;
    }

    getWebSocket() : WebSocket {
        return this.ws;
    }

    generateId() : string {
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