"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const client_manager_1 = require("./client-manager");
const client_1 = require("./client");
const server_1 = require("./server");
const wss = new ws_1.WebSocketServer({
    port: 6969
});
let config = {
    'port': 6969
};
const clientManager = new client_manager_1.ClientManager();
const server = new server_1.Server(wss, config);
wss.on('connection', (ws) => {
    console.log(ws);
    let client = new client_1.Client(ws);
    clientManager.add(client);
});
const ch = new MessageHandler();
