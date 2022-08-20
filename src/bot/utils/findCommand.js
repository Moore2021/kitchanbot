/**
 * Fetch command from registered commands in client properties.
 * @since 1.0.0
 * @param {object} [client={}] Current client's instance.
 * @param {string} [commandName=``] Target command name.
 * @returns {object|null}
 */
export default function findCommandProperties(client = {}, commandName = '') {
    const normalizedCommandName = commandName.toLowerCase();
    const res = client.commands.get(normalizedCommandName) ||
        client.commands.find(cmd => cmd.aliases.includes(normalizedCommandName));
    if (!res) return null;
    return res;
}