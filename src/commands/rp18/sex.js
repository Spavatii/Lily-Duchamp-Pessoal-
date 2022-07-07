const discord = require('discord.js')

module.exports = {
    name: 'sex',
    description: 'Use Lily para fazer sex com um fiel.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'fiel',
            type: 'USER',
            description: 'Especifique um fiel.',
            required: true,
        }
    ],
    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        let user = interaction.options.getUser('fiel')
        if (!interaction.channel.nsfw) { return interaction.reply('Eiii, que safadeza é essa...!!! Procure um local adequado para fazer tal ato!!! 😳') }

        var lista1 = [
            'https://imgur.com/ug5sRwC.gif',
            'https://imgur.com/Gp6NpFc.gif',
            'https://imgur.com/MH2at7Z.gif',
            'https://imgur.com/6y3vH04.gif',
            'https://imgur.com/7H4ItZ2.gif',
            'https://imgur.com/nDObGSQ.gif',
            'https://imgur.com/rRDEoBG.gif',
            'https://imgur.com/sPnVuaP.gif',
            'https://imgur.com/LfGeGNy.gif',
            'https://imgur.com/VbrrH7k.gif',
            'https://imgur.com/y5C7mFI.gif',
            'https://imgur.com/PiBmYhB.gif'
        ];

        var lista2 = [
            'https://imgur.com/ug5sRwC.gif',
            'https://imgur.com/Gp6NpFc.gif',
            'https://imgur.com/MH2at7Z.gif',
            'https://imgur.com/6y3vH04.gif',
            'https://imgur.com/7H4ItZ2.gif',
            'https://imgur.com/nDObGSQ.gif',
            'https://imgur.com/rRDEoBG.gif',
            'https://imgur.com/sPnVuaP.gif',
            'https://imgur.com/LfGeGNy.gif',
            'https://imgur.com/VbrrH7k.gif',
            'https://imgur.com/y5C7mFI.gif',
            'https://imgur.com/PiBmYhB.gif'
        ];



        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está fazendo sex com ${user}.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Que safadeza é essaaa...`})

        const button = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Também')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new discord.MessageEmbed()
            .setDescription(`**${user} também está fazendo sex com ${interaction.user}.**`)
            .setColor(`#252585`)
            .setImage(`${random2}`)
            .setTimestamp()
            .setFooter({ text: `• ... posso participar....? 😳`})

        interaction.reply({ embeds: [embed], components: [button] }).then(() => {
            const filter = i => i.customId === '1' && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {
                if (i.customId === '1') {
                    i.reply({ embeds: [embed1] })
                }
            });
        })
    }
}
