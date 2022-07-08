const discord = require('discord.js')
module.exports = {
    name: 'boamadrugada',
    description: 'Use Lily para desejar uma boa madrugada à todos.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/vnvztk5.gif',
            'https://imgur.com/1ZxphWF.gif',
            'https://imgur.com/EKX4Zig.gif',
            'https://imgur.com/lWtuO4v.gif',
            'https://imgur.com/rmIobQz.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está desejando uma boa madrugada à todos.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Boa madrugada, morceguinho! 🦇`})

            interaction.reply({embeds: [embed]});
        },
    }