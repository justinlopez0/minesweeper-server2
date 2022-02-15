
// All data from the client comes in as  a message
type message = {
    event: String,
    payload: Object
}

export class EventHandler {

    // Singleton
    private static instance : EventHandler;

    constructor() {
    }

    public static getInstance() : EventHandler {
        if (!EventHandler.instance) {
            EventHandler.instance = new EventHandler();
        }

        return EventHandler.instance;
    }

    /**
     * @todo need to abstract
     */
    handle(message: message, response: Function) {
        let data = null;
        switch (message.event) {
            case 'handshake':
                console.log('nice to meet you');
                break;
            case 'get_players':
                data = [
                    {name: 'justin'},
                    {name: 'julian'}
                ]
                break;
        }

        return response(data);
    }
}
