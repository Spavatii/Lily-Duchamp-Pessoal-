const discord = require('discord.js')
module.exports = {
    name: 'apaixonar',
    description: 'Use Lily para se apaixonar.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/T7Uu8UQ.gif',
            'https://imgur.com/6DRcZEk.gif',
            'https://imgur.com/VFTlHf5.gif',
            'https://imgur.com/D00Bpmw.gif',
            'https://imgur.com/pesSdA7.gif',
            'https://imgur.com/CPuC18M.gif',
            'https://imgur.com/aSpm4hN.gif',
            'https://imgur.com/hfq3dl0.gif',
            'https://imgur.com/n05fk9E.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se apaixonando.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Parece eu na época que conheci Jean... todas elas, na verdade, hehehe.`})

            interaction.reply({embeds: [embed]});
        },
    }