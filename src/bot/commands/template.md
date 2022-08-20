
# Here is the default template for creating a new command. (7th June, 2020)

## Simply copy paste this code

```javascript
/**
 * Command's Class description
 * @author yourname
 */
    /**
     * Define the file name (without the extension!)
     * @type {string}
     */
    export const name = `commandName`;
    /**
     * Define accepted aliases. User will be able to call the command with these alternative names.
     * @type {object}
     */
    export const aliases = [`itscommand`, `cmdName`, `justCallMeCommand!`];
    /**
     * Make a short, clear and concise command's description
     * @type {string}
     */
    export const description = `This is a command's template`;
    /**
     * Define if the command can be used as a slash command or not for Discord.
     * @type {Boolean} 
     */
    export const applicationCommand = false;
    /**
     * Define how to use the command. Include optional arguments/flags if needed
     * @type {string}
     */
    export const usage = `command <withArgument>(Optional)`;
    /**
     * Define the minimum permission level to use the command. Refer to ./src/config/permissions.js for more info
     * @type {number}
     */
    export const permissionLevel = 0;
    /**
     * The executed function upon command invocation.
     * The standard provided prarameters are writen in sequence below
     * [client, channel, tags, message, self]
     * @type {function}
     * 
     * @param {Object} client the twitch client object
     * @param {Object} channel the twitch channel object
     * @param {Object} tags the twitch tags object
     * @param {Object} message the twitch message object
     * @param {Object} self the twitch self object
     * @returns {void}
     */
    export async twitchExecute(client, channel, tags, message, self){
        // ... Your command ran here.
    }
    /**
     * The executed function upon command invocation.
     * The standard provided prarameters are writen in sequence below
     * [client, reply, message, arg, locale]
     * @type {function}
     * 
     * @param {Object} client the discord client object
     * @param {Object} channel the twitch channel object
     */
    export async discordExecute(client, interaction) {
        // ... Your command ran here.
    }
```
