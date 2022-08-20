import {
    Collection
} from 'discord.js';
import fs from 'fs';

/**
 * Agreggate all the available commands into unified object.
 * @param {string} [path=`./src/commands`] Target commands directory path.
 * @return {void}
 */
export default async function commandsLoader() {
    const path = './src/bot/commands/';
    const commands = new Collection();
    /**
     * Recursively pull available categories in command's root directory
     * @example user/system/social/shop/etc
     */
    let directories = fs.readdirSync(path).filter(file => !file.includes('.'));
    for (const index in directories) {
        const dir = directories[index];
        /**
         * Recursively pull files from a category
         * @example user/system/social/shop/etc
         */
        const files = fs.readdirSync(path + dir);
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        for (let i = 0; i < jsfile.length; i++) {
            const file = jsfile[i];
            const src = await import(`./${dir}/${file}`)
            commands.set(src.name, src);
        }
    }
    return commands;
}