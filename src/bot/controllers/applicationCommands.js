import {Routes, REST} from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();
export default function applicationCommandLoader({
    commands
}) {

    function formatDescriptions(command) {
        command.description.length >= 100 ? command.description = `${command.description.substring(0, 90)}...` : command.description;
    }

    function isApplicationCommand(command) {
        return command.applicationCommand;
    }
    if (!commands) return console.warn('[DISCORD@APPLICATION_COMMANDS] No commands found.');
    let applicationCommands = commands.filter(isApplicationCommand);

    applicationCommands.forEach(item => {
        formatDescriptions(item);
    });

    const rest = new REST({
        version: '10'
    }).setToken(process.env.DISCORD_BOT_TOKEN);

    (async () => {
        try {
            console.log('[DISCORD] Started refreshing application (/) commands.');
            if (process.env.NODE_ENV === 'production') {
                await rest.put(
                    Routes.applicationCommands(process.env.DISCORD_BOT_CLIENT_ID), {
                        body: applicationCommands
                    },
                );
            } else {
                /**
                 * For Pan's local bot use only
                 */
                await rest.put(
                    Routes.applicationGuildCommands(process.env.DISCORD_BOT_CLIENT_ID, '597171669550759936'), {
                        body: applicationCommands
                    },
                );
            }
            console.log(`[DISCORD] Successfully reloaded application (/) commands. ${applicationCommands.size} Commands`);
        } catch (error) {
            console.error(error);
        }
    })();
}