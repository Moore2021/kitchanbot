const reqEvent = (event) => require(`../events/discord/${event}.js`);
    /**
     * Handles events in the current node
     * @param {client} client Current bot instance.
     * @return {void}
     */
module.exports = function eventsController(client) {
    client.once(`ready`, () => reqEvent(`ready`)(client));
    client.on(`error`, (e) => reqEvent(`error`)(client, e));
    client.on(`interactionCreate`, (interaction) => reqEvent(`interactionCreate`)(client, interaction));
    //  Events below this point is only available in the production
    if (client.dev) return;
};