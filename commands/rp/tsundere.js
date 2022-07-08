const discord = require('discord.js')
module.exports = {
    name: 'tsundere',
    description: 'Use Lily para se sentir tsundere.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/VpJDV7Y.gif',
            'https://imgur.com/OuYZq2T.gif',
            'https://imgur.com/oE4bUuE.gif',
            'https://imgur.com/I7xKinn.gif',
            'https://imgur.com/ho1Ts1t.gif',
            'https://imgur.com/ZZM3mgR.gif',
            'https://imgur.com/2QoYqCq.gif',
            'https://imgur.com/4p4gTE7.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo tsundere.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Isso é compreensível... conheço muita gente assim.`})

            interaction.reply({embeds: [embed]});
        },
    }