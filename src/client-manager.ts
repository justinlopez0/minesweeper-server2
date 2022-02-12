
export class ClientManager {
    private clients: Array<any> = [];
    protected heartbeatInterval: number = 1000;

    constructor() {

    }

    add(client: any) {
        this.clients.push(client);
    }

    remove(id: string) {
        this.clients = this.clients.filter((client) => {
            return client.id !== id;
        })
    }

    count() {
        return this.clients.length;
    }

    sendAll(message: string) {
        this.clients.forEach((client) => {
            client.send(message);
        });
    }
}