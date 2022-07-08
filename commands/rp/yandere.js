const discord = require('discord.js')
module.exports = {
    name: 'yandere',
    description: 'Use Lily para se sentir yandere.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/vGDGnvt.gif',
            'https://imgur.com/rEgY14r.gif',
            'https://imgur.com/rf0zQej.gif',
            'https://imgur.com/uF9LV2H.gif',
            'https://imgur.com/FH7ysdX.gif',
            'https://imgur.com/UZCCovQ.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo yandere.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Isso é bizarro... mas eu entendo.`})

            interaction.reply({embeds: [embed]});
        },
    }