"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(ws) {
        this.ws = ws;
        this.id = this.generateId();
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
