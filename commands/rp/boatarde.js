const discord = require('discord.js')
module.exports = {
    name: 'boatarde',
    description: 'Use Lily para desejar uma boa tarde à todos.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/erbBuvJ.gif',
            'https://imgur.com/Um6hjRv.gif',
            'https://imgur.com/FgACmdt.gif',
            'https://imgur.com/e0W4DjE.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está desejando uma boa tarde à todos.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Boa tarde, aproveite para comer docinhos e beber chá! 🍵`})

            interaction.reply({embeds: [embed]});
        },
    }