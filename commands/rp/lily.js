const discord = require('discord.js')
module.exports = {
    name: 'lily',
    description: 'Use Lily para... se sentir como Lily?',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/XCXb7Ps.gif',
            'https://imgur.com/2wdMv6W.gif',
            'https://imgur.com/n7eBc8X.gif',
            'https://imgur.com/BIEaPeD.gif',
            'https://imgur.com/ayjNTk7.gif',
            'https://imgur.com/JD5yTkM.gif',
            'https://imgur.com/eE94uTv.gif',
            'https://imgur.com/WIkvahZ.gif',
            'https://imgur.com/9Gg2shI.gif',
            'https://imgur.com/soNgRqf.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo como Lily.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Pera... eiii, o que é isso...?! 😳`})

            interaction.reply({embeds: [embed]});
        },
    }