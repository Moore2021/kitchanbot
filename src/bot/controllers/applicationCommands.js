const {
    REST
} = require(`@discordjs/rest`);
const {
    Routes
} = require(`discord.js`);

module.exports = function applicationCommandLoader({
    commands
}) {

    function formatDescriptions(command) {
        command.description.length >= 100 ? command.description = `${command.description.substring(0, 90)}...` : command.description;
    }

    function isApplicationCommand(command) {
        return command.applicationCommand;
    }
    if (!commands) return console.warn(`[DISCORD@APPLICATION_COMMANDS] No commands found.`);
    let applicationCommands = commands.filter(isApplicationCommand);

    applicationCommands.forEach(item => {
        formatDescriptions(item);
    });

    const rest = new REST({
        version: `10`
    }).setToken(process.env.BOT_TOKEN);

    (async () => {
        try {
            console.log(`[DISCORD] Started refreshing application (/) commands.`);
            if (process.env.NODE_ENV === `production`) {
                await rest.put(
                    Routes.applicationCommands(process.env.DISCORD_BOT_CLIENT_ID), {
                        body: applicationCommands
                    },
                );
            } else {
                /**
                 * For Pan's local bot use only
                 */
                // await rest.put(
                //     Routes.applicationGuildCommands(`514688969355821077`, `577121315480272908`), {
                //         body: applicationCommands
                //     },
                // ) 
            }
            console.log(`[DISCORD] Successfully reloaded application (/) commands. ${applicationCommands.size} Commands`);
        } catch (error) {
            console.error(error);
        }
    })();
};