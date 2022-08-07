const findCommand = require(`../../utils/findCommand`);
const {twitchPermissions} = require(`../../utils/permissions`);
const internalServiceRouter = require(`../../../api/internal/internalServiceRouter`);


module.exports = async function message(client, channel, tags, message, self) {
    if (self || !message.startsWith(process.env.PREFIX)) return; // Ignore messages from the bot

    const args = message.slice(1).split(` `); // Remove the prefix and split the message into arguments
    const targetCommand = args.shift().toLowerCase(); // Get the command and remove it from the arguments
    let command = findCommand(client, targetCommand); // Find the command

    if (!command) return; // If the command was not found, silently exit
    const userPermission = twitchPermissions(tags); // Get the user's permission level
    if (command.permissionLevel > userPermission.level) return;
    let router = internalServiceRouter;
    //const instanceId = `CMD_${command.name.toUpperCase()}_${tags[`user-id`]}@${channel}`;
    try {
        await command.twitchExecute(client, channel, tags, message, self, router);
        //  Dispose
        command = null;
        return;
    } catch (e) {
        console.error(e);
    }
    console.log(`command.filename: ${command.filename}`);
};