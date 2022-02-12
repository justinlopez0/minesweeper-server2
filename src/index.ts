import { WebSocketServer } from "ws";
import { MessageHandler } from './message-handler';
import { ClientManager } from './client-manager';
import { Client } from './client';

const server = new WebSocketServer({
    port: 6969
});

const clientManager = new ClientManager();

server.on('connection', (ws) => {
    console.log(ws);
    let client = new Client(ws);
    clientManager.add(client);
});

const ch = new MessageHandler();
