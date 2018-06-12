let websocket;

const SERVER_URL = "ws://localhost:4000";

// Todo: Remove console.info if not needed
class WebSocketHandler {
    static get websocket() {
        return websocket;
    }

    init = () => {
        this.websocket = new WebSocket(SERVER_URL);
        this.websocket.onopen = () => this.onOpen();
        this.websocket.onclose = () => this.onClose();
        this.websocket.onmessage = (e) => this.onMessage(e);
        this.websocket.onerror = (e) => this.onError(e);
    };

    onOpen = () => {
        console.info('Connected to web socket.');
    }

    onClose = () => console.info('Disconnected from web socket');

    onMessage = (e) => console.info('Message received: ', e.data);

    onError = (e) => console.error('Web socket error: ', e.data);

    doSend = (message) => {
        const serialized = decodeURI(encodeURI(JSON.stringify(message)));
        console.info('Message sent:', message);
        console.log('Serialized:', serialized);
        this.websocket.send(serialized);
    };
}

export default WebSocketHandler;

