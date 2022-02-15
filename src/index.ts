import { WebSocketServer } from "ws";
import { ClientManager } from './client-manager';
import { Client } from './client';
import { Server } from './server';

const wss = new WebSocketServer({
    port: 6969
});

const config = {};

const server = new Server(wss, config);
server.setup();