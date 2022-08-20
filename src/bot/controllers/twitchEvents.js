import connectingEvent from '../events/twitch/connecting.js';
import logonEvent from '../events/twitch/logon.js';
import messageEvent from '../events/twitch/message.js';
    /**
     * Handles events in the current node
     * @param {client} client Current bot instance.
     * @return {void}
     */
export default function eventsController(client) {
    client.once('connecting', (address, port) => connectingEvent(client, address, port));
    client.once('logon', ()=>logonEvent(client));
    client.on('message', (channel, tags, message, self) => messageEvent(client, channel, tags, message, self));
    //  Events below this point is only available in the production
    if (client.dev) return;
}