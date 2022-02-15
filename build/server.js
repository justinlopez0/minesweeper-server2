"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const event_handler_1 = require("./event-handler");
const client_manager_1 = require("./client-manager");
const client_1 = require("./client");
class Server {
    constructor(wss, config) {
        this.eventHandler = new event_handler_1.EventHandler();
        this.clientManager = new client_manager_1.ClientManager();
        this.wss = wss;
        this.config = config;
    }
    setup() {
        this.wss.on('connection', ws => {
            // Create a new Client and add it to the ClientManager
            this.clientManager.add(new client_1.Client(ws));
        });
    }
}
exports.Server = Server;
