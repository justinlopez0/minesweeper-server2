"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const event_handler_1 = require("./event-handler");
class Client {
    constructor(ws) {
        this.eventHandler = event_handler_1.EventHandler.getInstance();
        this.ws = ws;
        this.id = this.generateId();
        this.setupEventHandler();
    }
    setupEventHandler() {
        this.ws.on('message', data => {
            const parsedData = JSON.parse(data.toString());
            this.eventHandler.handle(parsedData);
        });
    }
    setWebSocket(ws) {
        this.ws = ws;
    }
    getWebSocket() {
        return this.ws;
    }
    generateId() {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };
        return s4() + s4() + '-' + s4();
    }
    disconnect() {
        this.ws.close();
    }
    heartBeat() {
    }
}
exports.Client = Client;
