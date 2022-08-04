module.exports = function message(client, channel, tags, message, self) {
    console.log(`${channel}: ${message}`);
        if (self || !message.startsWith(process.env.PREFIX)) return; // Ignore messages from the bot

        const args = message.slice(1).split(` `); // Remove the prefix and split the message into arguments
        const command = args.shift().toLowerCase(); // Get the command and remove it from the arguments

        if (command === `hello`) {
            client.say(channel, `@${tags.username}, heya!`);
        }
};