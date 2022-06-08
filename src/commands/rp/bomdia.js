const discord = require('discord.js')
module.exports = {
    name: 'bomdia',
    description: 'Use Lily para desejar um bom dia à todos.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/wi99SjO.gif',
            'https://imgur.com/VfGPvBa.gif',
            'https://imgur.com/GY1RNfv.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está desejando um bom dia à todos.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Bom dia, flor do dia! 🌻`})

            interaction.reply({embeds: [embed]});
        },
    }