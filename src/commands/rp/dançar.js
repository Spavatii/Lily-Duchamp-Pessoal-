const discord = require('discord.js')
module.exports = {
    name: 'dançar',
    description: 'Use Lily para dançar.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/EVY946m.gif',
            'https://imgur.com/nlBHtSq.gif',
            'https://imgur.com/EvG6Rcm.gif',
            'https://imgur.com/xhKfDgJ.gif',
            'https://imgur.com/IC0lZUi.gif',
            'https://imgur.com/L4zW9mK.gif',
            'https://imgur.com/xdGjWTz.gif',
            'https://imgur.com/K4miOot.gif',
            'https://imgur.com/hpfHjFo.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está dançando.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Hmmm... nota infinita! Eu realmente gostei do seu gingado, hehehe.`})

            interaction.reply({embeds: [embed]});
        },
    }