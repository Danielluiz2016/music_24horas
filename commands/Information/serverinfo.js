const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
    // options
    name: "serverinfo",
    description: `See server information!`,
    userPermissions: ['SEND_MESSAGES'],
    botPermissions: ['SEND_MESSAGES'],
    category: "Information",
    cooldown: 10,
    // command start
    run: async ({ client, interaction, args, prefix }) => {
        // Code

        var membro = interaction.guild.memberCount
        var data = interaction.guild.createdAt.toLocaleDateString("pt-br");
        var impulsos = interaction.guild.premiumSubscriptionCount;
        var chats = interaction.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size;
        var calls = interaction.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size;
        var canais = interaction.guild.channels.cache.size;
        var cargos = interaction.guild.roles.cache.size;
        var dono_id = interaction.guild.ownerId;
        var dono = interaction.guild.members.cache.get(dono_id);
        var server_id = interaction.guild.id
        /* var emoji = server.emojis.cache.size*/
        /* var bots = server.members.cache.filter(b => b.user.bot).size*/
        const user = interaction.user
        var onwer = ['135956528007086080']
        /*  const server = interaction.guild*/


        const embed = new MessageEmbed()
            .setColor(interaction.member.displayColor)
            .setTitle(`${interaction.guild.name}`)
            .setFooter(`• Autor: ${interaction.member.user.tag}`, interaction.user.displayAvatarURL({ format: "png" }))
            .setTimestamp()
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)
            .addFields(
                {
                    name: `🆔 ID do servidor:`,
                    value: `\`${server_id}\``,
                    inline: true
                },
                {
                    name: '👑 Dono',
                    value: `\`${dono.user.tag}\``,
                    inline: true
                },
                {
                    name: `💬 Canais (${canais}):`,
                    value: `Canais de texto: \`${chats}\`\nCalls: \`${calls}\``,
                    inline: true
                },
                {
                    name: `👥 Membros`,
                    value: `\`${membro}\` membros.`,
                    inline: true
                },

                {
                    name: `💨 Impulsos:`,
                    value: `\`${impulsos}\` Impulsos.`,
                    inline: true
                },
                {
                    name: ` 💼 Cargos:`,
                    value: `\`${cargos}\``,
                    inline: true
                },
                /*  {
                    name: '😀 Emojis:',
                    value: `\`${emoji}\``,
                    inline: true
                  },*/
                {
                    name: `🗓 Criado em:`,
                    value: `\`${data}\``,
                    inline: true
                },
            );

        try {
            interaction.reply({ embeds: [embed] })

        } catch (error) {
            interaction.reply(error)
        }

    }
}
);