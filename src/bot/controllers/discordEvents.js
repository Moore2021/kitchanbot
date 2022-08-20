import readyEvent from '../events/discord/ready.js';
import interactionCreate from '../events/discord/interactionCreate.js';
    /**
     * Handles events in the current node
     * @param {client} client Current bot instance.
     * @return {void}
     */
export default function eventsController(client) {
    client.once('ready', () => readyEvent(client));
    client.on('interactionCreate', (interaction) => interactionCreate(client, interaction));
    //  Events below this point is only available in the production
    if (client.dev) return;
}