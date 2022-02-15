"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
    }
    add(client) {
        this.clients.push(client);
    }
    remove(id) {
        this.clients = this.clients.filter((client) => {
            return client.id !== id;
        });
    }
    count() {
        return this.clients.length;
    }
    sendAll(message) {
        this.clients.forEach((client) => {
            client.send(message);
        });
    }
}
exports.ClientManager = ClientManager;
