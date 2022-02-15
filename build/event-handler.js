"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
class EventHandler {
    constructor() {
    }
    static getInstance() {
        if (!EventHandler.instance) {
            EventHandler.instance = new EventHandler();
        }
        return EventHandler.instance;
    }
    /**
     * @todo need to abstract
     */
    handle(message, response) {
        let data = null;
        switch (message.event) {
            case 'handshake':
                console.log('nice to meet you');
                break;
            case 'get_players':
                data = [
                    { name: 'justin' },
                    { name: 'julian' }
                ];
                break;
        }
        return response(data);
    }
}
exports.EventHandler = EventHandler;
