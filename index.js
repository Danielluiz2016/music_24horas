const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    // Intents.FLAGS.GUILD_BANS,
     Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    // Intents.FLAGS.GUILD_INTEGRATIONS,
    // Intents.FLAGS.GUILD_WEBHOOKS,
    // Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    // Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    // Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    // Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    // Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});
module.exports = client;

const config = require("./settings/config.json");
client.on("ready", () => {
  const canal_log_on = client.channels.cache.get('1042081650143662252')
  const dono = client.users.cache.get('135956528007086080')
  const dono2 = "+Daniel Luiz#9128"
  const emb = new Discord.MessageEmbed()
      .setTitle('Estou Online novamente!')
      .setDescription('Estive offline, precisei tirar um tempo para manutenção de args...')
      .setColor('#3ee607')
      .setFooter(`${dono.username} me ligou!`)
      .setTimestamp()
  canal_log_on.send({ content: `${dono2}`, embeds: [emb] })
})

// // for replit
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(` app listening on port ${port}`);
// });

// Global Variables
client.events = new Collection();
client.cooldowns = new Collection();
client.subcmd = new Collection();
client.commands = new Collection();
client.mcommands = new Collection();
client.aliases = new Collection();
client.temp = new Map();
client.temp2 = new Map();
client.categories = fs.readdirSync("./commands/");

// Initializing the project
//Loading files, with the client variable like Command Handler, Event Handler, ...
["event_handler", "slash_handler", "Player_Handler", "command_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

// // database connection
const Enmap = require("enmap");
client.settings = new Enmap({
  name: "settings",
  dataDir: "./Database/Settings",
});
client.music = new Enmap({
  name: "music",
  dataDir: "./Database/Music",
});

client.login(process.env.token || config.token);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [Error_Handling] :: Multiple Resolves");
  console.log(type, promise, reason);
});

