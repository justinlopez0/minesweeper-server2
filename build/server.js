"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const event_handler_1 = require("./event-handler");
class Server {
    constructor(wss, config) {
        this.eventHandler = new event_handler_1.EventHandler();
        this.wss = wss;
        this.config = config;
    }
    on(event, callback) {
        switch (event) {
            case 'test':
                console.log('test event');
                break;
        }
        callback('done!');
    }
    setup() {
        this.wss.on('message', (data) => {
            this.eventHandler.handle(data);
        });
    }
}
exports.Server = Server;
