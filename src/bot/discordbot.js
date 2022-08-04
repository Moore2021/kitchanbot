const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});
const commandsLoader = require(`./commands/loader`)

module.exports = () => {

    client.on("debug", (info)=>console.debug(`[DISCORD@DEBUG]\n${info}`)).on("warn", (info)=>console.warn(`[DISCORD@WARN]\n${info}`))
    registerNode(client, commandsLoader(),`commands`)
    require(`./controllers/applicationCommands`)({ commands: client.commands })
    require(`./controllers/discordEvents`)(client)

    /**
     * Registering new first-level property/node into this.
     * @since 6.0.0
     * @param {*} [node] assign any value.
     * @param {string} [nodeName] codename/identifier of the given node.
     * @returns {void}
     */
     function registerNode(nodeToAttachTo, node, nodeName){
        const fn = `[DISCORD@REGISTER_NODE]`
        if (!nodeName || !node || !nodeToAttachTo) throw new TypeError(`${fn} parameters (node, nodeName, nodeToAttachTo) cannot be blank.`)
        if (typeof nodeName != `string`) throw new TypeError(`${fn} parameter 'nodeName' only accepts string.`)
        [nodeToAttachTo][nodeName] = node
        console.log(`${fn} '${nodeName}' has been registered as client's property.`)
    }

    client.login(process.env.DISCORD_BOT_TOKEN);
};