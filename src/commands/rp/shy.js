const discord = require('discord.js')
module.exports = {
    name: 'shy',
    description: 'Use Lily para se sentir shy.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var lista1 = [
            'https://imgur.com/0sGwOFK.gif',
            'https://imgur.com/EtrvMnY.gif',
            'https://imgur.com/PiKayxM.gif',
            'https://imgur.com/0x7bqBX.gif',
            'https://imgur.com/s6GFuMq.gif',
            'https://imgur.com/PJVMycm.gif',
            'https://imgur.com/Ds482fc.gif',
            'https://imgur.com/ftxU5Li.gif',
            'https://imgur.com/R8t7aaR.gif',
            'https://imgur.com/ufRjiQI.gif',
            'https://imgur.com/NkBEvJZ.gif',
            'https://imgur.com/Nk9yBnT.gif',
            'https://imgur.com/wg6tseF.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está se sentindo shy.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Isso sim eu aceito... até porque eu sinto direto... 😳`})

            interaction.reply({embeds: [embed]});
        },
    }