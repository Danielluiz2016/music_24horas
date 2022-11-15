const client = require("..");
const player = require("../handlers/player");
const { databasing } = require("../handlers/functions");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: `@${client.user.username} /play`,
    type: "PLAYING",
  });

  // player
  await client.guilds.fetch();

  await client.guilds.cache.forEach(async (guild) => {
    await databasing(guild.id);
    client.updatemusic(guild);
  });
});

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