"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const server_1 = require("./server");
const wss = new ws_1.WebSocketServer({
    port: 6969
});
const config = {};
const server = new server_1.Server(wss, config);
server.setup();
