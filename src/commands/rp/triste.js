const discord = require('discord.js')
module.exports = {
    name: 'triste',
    description: 'Use Lily para se sentir triste.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/z0uyyV6.gif',
            'https://imgur.com/oKKO1GI.gif',
            'https://imgur.com/jIqvEHa.gif',
            'https://imgur.com/VjQUhiS.gif',
            'https://imgur.com/cLSE1E4.gif',
            'https://imgur.com/7lYaCeE.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo triste.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Se eu conseguisse... eu te daria um abraço agora...`})

            interaction.reply({embeds: [embed]});
        },
    }