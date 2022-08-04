require(`dotenv`).config()

const express = require(`express`);
const router = require(`./src/website/routes`);

const app = express();
app.use(express.json());
app.use(router);


app.listen(8080, () => console.log(`Server listening on port 8080`));

require(`./src/bot/twitchbot`)()
require(`./src/bot/discordbot`)()