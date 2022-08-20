import {
    Client,
    GatewayIntentBits
} from 'discord.js';
import commandsLoader from './commands/loader.js';
import db from '../database/database.js';
import discordEvents from './controllers/discordEvents.js';
import applicationCommands from './controllers/applicationCommands.js';
import * as dotenv from 'dotenv';
dotenv.config();
export default async function discordbot() {
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });
    client.on('debug', (info) => console.debug(`[DISCORD@DEBUG]\n${info}`)).on('warn', (info) => console.warn(`[DISCORD@WARN]\n${info}`));
    registerNode(client, await commandsLoader(), 'commands');
    // console.log(client.commands);
    applicationCommands({
        commands: client.commands
    });
    discordEvents(client);
    registerNode(client, db, 'db');

    /**
     * Registering new first-level property/node into this.
     * @since 6.0.0
     * @param {*} [node] assign any value.
     * @param {string} [nodeName] codename/identifier of the given node.
     * @returns {void}
     */
    function registerNode(nodeToAttachTo, node, nodeName) {
        const fn = '[DISCORD@REGISTER_NODE]';
        if (!nodeName || !node || !nodeToAttachTo) 
            throw new TypeError(`${fn} parameters (node, nodeName, nodeToAttachTo) cannot be blank.`);
        if (typeof nodeName != 'string')
            throw new TypeError(`${fn} parameter 'nodeName' only accepts string.`);
        nodeToAttachTo[nodeName] = node;
        console.log(`${fn} '${nodeName}' has been registered as client's property.`);
    }

    client.login(process.env.DISCORD_BOT_TOKEN);
}