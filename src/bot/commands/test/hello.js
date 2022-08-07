module.exports = {
    /**
     * Define the file name (without the extension!)
     * @type {string}
     */
    name: `hello`,
    /**
     * Define accepted aliases. User will be able to call the command with these alternative names.
     * @type {object}
     */
    aliases: [`hi`],
    /**
     * Make a short, clear and concise command's description
     * @type {string}
     */
    description: `This is a test command.`,
    /**
     * Define if the command can be used as a slash command or not for Discord.
     * @type {Boolean} 
     */
    applicationCommand: false,
    /**
     * Define how to use the command. Include optional arguments/flags if needed
     * @type {string}
     */
    usage: `hello`,
    /**
     * Define the minimum permission level to use the command. Refer to ./src/config/permissions.js for more info
     * @type {number}
     */
    permissionLevel: 0,
    /**
     * Define the command's filename.
     * @type {string} 
     */
    filename: `hello`,
    /**
     * The executed function upon command invocation.
     * The standard provided prarameters are writen in sequence below
     * [client, channel, tags, message, self]
     * @type {function}
     * }
     * @param {Object} client the twitch client object
     * @param {Object} channel the twitch channel object
     * @param {Object} tags the twitch tags object
     * @param {Object} message the twitch message object
     * @param {Object} self the twitch self object
     * @returns {void}
     */
    async twitchExecute(client, channel, tags, message, self, router) {
        router.post(`person`,{
            request: `createPerson`,
            body: {
                firstName: `John`, 
                lastName: `doe`, 
                email: `test123@gmail.com`
            }
        });
    },
    /**
     * The executed function upon command invocation.
     * The standard provided prarameters are writen in sequence below
     * [client, reply, message, arg, locale]
     * @type {function}
     */
    async discordExecute(client, interaction) {
        // ... Your command ran here.
    }
};