const discord = require('discord.js')
module.exports = {
    name: 'chorar',
    description: 'Use Lily para chorar.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/ppk65dX.gif',
            'https://imgur.com/DH2FE6N.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está chorando.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Eu realmente queria poder te ajudar agora...`})

            interaction.reply({embeds: [embed]});
        },
    }