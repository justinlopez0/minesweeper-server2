"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const message_handler_1 = require("./message-handler");
const client_manager_1 = require("./client-manager");
const client_1 = require("./client");
const server = new ws_1.WebSocketServer({
    port: 6969
});
const clientManager = new client_manager_1.ClientManager();
server.on('connection', (ws) => {
    console.log(ws);
    let client = new client_1.Client(ws);
    clientManager.add(client);
});
const ch = new message_handler_1.MessageHandler();
