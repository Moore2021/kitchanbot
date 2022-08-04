const tmi = require(`tmi.js`);
const client = new tmi.Client({
    connection: {
        reconnect: true,
    },
    channels: [`thefrying_pan_`],
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_BOT_OAUTH_TOKEN,
    },
    options: {
        debug: true
    }
});
const commandsLoader = require(`./commands/loader`);

module.exports = () => {
    
    registerNode(client, commandsLoader(),`commands`);
    require(`./controllers/twitchEvents`)(client);
    /**
     * Registering new first-level property/node into this.
     * @since 6.0.0
     * @param {*} [node] assign any value.
     * @param {string} [nodeName] codename/identifier of the given node.
     * @returns {void}
     */
    function registerNode(nodeToAttachTo, node, nodeName) {
        const fn = `[TWITCH@REGISTER_NODE]`;
        if (!nodeName || !node || !nodeToAttachTo) throw new TypeError(`${fn} parameters (node, nodeName, nodeToAttachTo) cannot be blank.`);
        if (typeof nodeName != `string`) throw new TypeError(`${fn} parameter 'nodeName' only accepts string.`)[nodeToAttachTo][nodeName] = node;
        console.log(`${fn} '${nodeName}' has been registered as client's property.`);
    }
    client.connect();

};