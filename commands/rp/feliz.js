const discord = require('discord.js')
module.exports = {
    name: 'feliz',
    description: 'Use Lily para se sentir feliz.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/w1Mq12h.gif',
            'https://imgur.com/IDBLipf.gif',
            'https://imgur.com/qW4YqjW.gif',
            'https://imgur.com/gy4dZdl.gif',
            'https://imgur.com/xxFbluY.gif',
            'https://imgur.com/SjTbA6i.gif',
            'https://imgur.com/vmxRm0B.gif',
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo feliz.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• É tão bom poder te ver assim... hihihi!`})

            interaction.reply({embeds: [embed]});
        },
    }