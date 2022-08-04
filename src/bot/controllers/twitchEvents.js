const reqEvent = (event) => require(`../events/twitch/${event}.js`)
    /**
     * Handles events in the current node
     * @param {client} Annie Current bot instance.
     * @return {void}
     */
module.exports = function eventsController(client) {
    client.once(`connecting`, (address, port) => reqEvent(`connecting`)(client, address, port))
    client.once(`logon`, ()=>reqEvent(`logon`)(client))
    client.on(`message`, (channel, tags, message, self) => reqEvent(`message`)(client, channel, tags, message, self))
    //  Events below this point is only available in the production
    if (client.dev) return
}