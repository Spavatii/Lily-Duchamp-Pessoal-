const discord = require('discord.js')
module.exports = {
    name: 'gozar',
    description: 'Use Lily para gozar.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        if (!interaction.channel.nsfw) { return interaction.reply('Eiii, que safadeza é essa...!!! Procure um local adequado para fazer tal ato!!! 😳') }
        var lista1 = [
            'https://imgur.com/fhwPZ7d.gif',
            'https://imgur.com/pwwoFDZ.gif',
            'https://imgur.com/UZ8gUct.gif',
            'https://imgur.com/cFYtOc9.gif',
            'https://imgur.com/GCnFNBU.gif',
            'https://imgur.com/Adl0CWX.gif',
            'https://imgur.com/cIgrw7I.gif',
            'https://imgur.com/bOjYVex.gif',
            'https://imgur.com/2UXNJsM.gif',
            'https://imgur.com/OtKmsMR.gif',
            'https://imgur.com/edL3dxQ.gif',
            'https://imgur.com/b4mtVZc.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está gozando.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Que issooo... quanta coisa... 😳`})

            interaction.reply({embeds: [embed]});
        },
    }