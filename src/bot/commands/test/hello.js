export const name = 'hello';
export const aliases = ['hi'];
export const description = 'This is a test command.';
export const applicationCommand = true;
export const usage = 'hello';
export const permissionLevel = 0;
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
export async function twitchExecute(client, channel, tags, message, self, router) {
    // router.post('person', {
    //     request: 'createPerson',
    //     body: {
    //         firstName: 'John',
    //         lastName: 'doe',
    //         email: 'test123@gmail.com'
    //     }
    // });
    client.say(channel,'this is a test');
}
/**
 * The executed function upon command invocation.
 * The standard provided prarameters are writen in sequence below
 * [client, reply, message, arg, locale]
 * @type {function}
 */
export async function discordExecute(client, interaction) {
    // ... Your command ran here.
    interaction.reply('this is a test');
}