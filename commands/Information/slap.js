const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
    // options
    name: "slap",
    description: `See server information!`,
    userPermissions: ['SEND_MESSAGES'],
    botPermissions: ['SEND_MESSAGES'],
    category: "Information",
    cooldown: 10,
    type: 'CHAT_INPUT',
    options: [
        {
            name: "user",
            type: 6,
            description: "Mencione o usuário que você quer dar um tapa.",
            required: true
        }
    
    ],
    // command start
    run: async ({ client, interaction, args, prefix }) => {
        // Code

        var membro_1 = await interaction.options.getUser('user3') || interaction.user 

        var membro_2 = await interaction.options.getUser('user') || interaction.user 

        var user1 = await interaction.options.getUser('user0') || interaction.user 
        

        if(!user1) return interaction.reply('Mencione um usuário para poder bater no mesmo.');

        var gif = [
            'https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif',
            'https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif',
            'https://c.tenor.com/eStYuttoV7QAAAAd/osamake-anime.gif',
            'https://c.tenor.com/0RmVdUa4ZooAAAAC/anime-slap.gif',
            'https://c.tenor.com/aLokhV_OuyUAAAAC/asobi-asobase-olivia.gif',
            'https://2.bp.blogspot.com/-cP08vuA-2uA/XY0w0XwKseI/AAAAAAABpBA/QBL8buMsOmoI72pywYSTaMjPH4Zianx8gCKgBGAsYHg/s1600/Cop+Craft+-+Episode+9+-+Tilarna+Slaps.gif',
            'https://c.tenor.com/dHNqRCJQSnIAAAAC/slap-%E0%B8%99%E0%B8%8A.gif',
            'https://cdn.discordapp.com/attachments/840659692770164746/945130144870326312/ass_slap_gif.gif'
        ]

        var rand = gif[Math.floor(Math.random() * gif.length)];
        

       var membro_1 = interaction.user;
     
            const embed = new MessageEmbed()
            .setTitle('🩹 Parece que alguém tomou um tapa 🩹')
            .setColor("#219100")
            .setDescription(`**${membro_1} deu um tapa em ${membro_2}**`)
            .setImage(`${rand}`)
          

            interaction.reply({embeds: [embed] })
        
            
    }
})