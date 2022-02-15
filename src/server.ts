import { WebSocketServer } from "ws";
import { EventHandler } from "./event-handler";
import { ClientManager } from "./client-manager";
import { Client } from "./client";

export class Server {
    protected config: object;

    protected wss: WebSocketServer;

    protected eventHandler: EventHandler = new EventHandler();

    protected clientManager: ClientManager = new ClientManager();

    constructor(wss: WebSocketServer, config: object) {
        this.wss = wss;
        this.config = config;
    }
    
    public setup() {
        this.wss.on('connection', ws => {
            // Create a new Client and add it to the ClientManager
            this.clientManager.add(new Client(ws));
        });
    }
   
}