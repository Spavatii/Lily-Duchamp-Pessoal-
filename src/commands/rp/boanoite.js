const discord = require('discord.js')
module.exports = {
    name: 'boanoite',
    description: 'Use Lily para desejar uma boa noite à todos.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/4J9PyEs.gif',
            'https://imgur.com/95TXemA.gif',
            'https://imgur.com/p5N3lcP.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está desejando uma boa noite à todos.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Boa noite, aproveite para dormir bem... senão... puxarei seu pé!!! Hehehe.! 👻`})

            interaction.reply({embeds: [embed]});
        },
    }