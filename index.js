import * as dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';

const app = express();
app.use(json());


app.listen(8080, () => console.log('Server listening on port 8080'));

import twitchbot from './src/bot/twitchbot.js';
import discordbot from './src/bot/discordbot.js';
twitchbot();
discordbot();