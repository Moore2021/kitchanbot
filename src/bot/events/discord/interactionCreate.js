import {discordPermissions as getUserPermission} from '../../utils/permissions.js';
import {cooldown} from '../../config/commands.js';
import {InteractionType} from 'discord.js';
export default async function interactionCreate(client, interaction){
   
    if (!interaction.type === (InteractionType.ApplicationCommand || InteractionType.ModalSubmit)) return;
    let command = client.commands.get(interaction.commandName);
        // Ignore non-registered commands
    if (!command) return;
        // Handle if user doesn't have enough permission level to use the command
    const userPermission = getUserPermission(interaction, interaction.user.id);
    if (command.permissionLevel > userPermission.level) return;
        // Handle cooldowns
    const instanceId = `CMD_${command.name.toUpperCase()}_${interaction.user.id}@${interaction.guildId}`;
    if (client.cooldowns.has(instanceId)) {
        const userCooldown = client.cooldowns.get(instanceId);
        const diff = cooldown - ((Date.now() - userCooldown) / 1000);
        if (diff > 0) return interaction.reply('client.locales.en.COMMAND.STILL_COOLDOWN');
    }
    client.cooldowns.set(instanceId, Date.now());
        // Handle user locale
    const userLanguage = await client.db.getUserLocale(interaction.user.id);
    let locale = null;
    try {
        locale = client.locales[userLanguage.lang];
    } catch (error) {
        locale = client.locales.en;
    }
    // Prevent user with uncomplete data to proceed the command.
    if ((await client.db.redis.sismember('VALIDATED_USERID', interaction.user.id)) === 0) {
        return interaction.reply('locale.USER.REGISTRATION_ON_PROCESS');
    }
    try {
        if (interaction.type === InteractionType.ModalSubmit) await command.modalResponse(client, interaction );
        if (interaction.type === InteractionType.ApplicationCommand) await command.Iexecute(client, interaction);

        //  Dispose
        command = null;
    } catch (err) {
        if (err) console.error(err);

        await interaction.reply({
            content: 'An error occured while trying to process that command',
            ephemeral: true
        });
    }
}