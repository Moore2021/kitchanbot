/**
 * Decide target user's permissions level.
 * @param {object} [message={}] Target message's instance.
 * @param {string} [userId=``] Target user.
 * @return {object}
 */
function discordPermissions(message = {}, userId = ``) {
    if (!message) return new TypeError(`[DISCORD] discordPermissions: message is required.`);
    if (!userId) return new TypeError(`[DISCORD] discordPermissions: userId is required.`);
    //  Developer privileges
    if ([`230034968515051520`, `277266191540551680`].includes(userId)) return {
        level: 4,
        name: `Developer`,
        description: `System developer privileges`,
        permissionString: `Administrator`
    };
    const fallbackPrivillege = {
        level: 0,
        name: `User`,
        description: `Regular user`,
    };
    // User without developer privileges in dm interface will be automatically assigned as a regular user.
    if (message.channel) {
        if (message.channel.type === `dm`) return fallbackPrivillege;
    }
    const member = message.member || message;
    //  Server owner
    if (userId === message.guild.ownerID) return {
        level: 3,
        name: `Server Owner`,
        description: `The owner of current server.`
    };
    //  Server admin
    if (member.permissions.has(`Administrator`)) return {
        level: 3,
        name: `Administrator`,
        description: `Server's super user`
    };
    //  Moderator
    if (member.permissions.has(`ManageRoles`)) return {
        level: 2,
        name: `Moderator`,
        description: `Server's manager with moderation capabilities`
    };
    //  If no special privileges are match, fall back to regular-user privilege
    return fallbackPrivillege;
}

function twitchPermissions(tags={}) {
    if (!tags) return new TypeError(`[TWITCH] twitchPermissions: tags is required.`);
    // 137384352 is the ID of the bot owner.
    const fallbackPrivillege = {
        level: 0,
        name: `User`,
        description: `Regular user`,
    };
    //  Developer privileges
    if ([`137384352`].includes(tags[`user-id`])) return {
        level: 4,
        name: `Developer`,
        description: `System developer privileges`,
        permissionString: `Administrator`
    };
    //  Channel owner
    if (`badges` in tags) {
        if (tags[`badges`].includes(`broadcaster`)) return {
            level: 3,
            name: `Server Owner`,
            description: `The owner of current server.`
        };
    }
    //  Moderator/admin privileges
    if (tags.mod) return {
        level: 2,
        name: `Moderator`,
        description: `channel's manager with moderation capabilities`
    };
    return fallbackPrivillege;
}
module.exports = {discordPermissions, twitchPermissions};