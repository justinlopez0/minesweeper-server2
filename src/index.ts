import { WebSocketServer } from "ws";
import { ClientManager } from './client-manager';
import { Client } from './client';
import { Server } from './server';

const wss = new WebSocketServer({
    port: 6969
});

let config = {
    'port': 6969
};

const clientManager = new ClientManager();
const server = new Server(wss, config);

wss.on('connection', (ws) => {
    console.log(ws);
    let client = new Client(ws);
    clientManager.add(client);
});

const ch = new MessageHandler();
