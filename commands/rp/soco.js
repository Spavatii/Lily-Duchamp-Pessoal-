const discord = require('discord.js')

module.exports = {
    name: 'soco',
    description: 'Use Lily para socar um fiel.',
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

        var lista1 = [
            'https://imgur.com/ph1kXg2.gif',
            'https://imgur.com/FDXFf4o.gif',
            'https://imgur.com/5EVBfOY.gif',
            'https://imgur.com/3bUTsFr.gif',
            'https://imgur.com/e21XAEJ.gif'
        ];

        var lista2 = [
            'https://imgur.com/ph1kXg2.gif',
            'https://imgur.com/FDXFf4o.gif',
            'https://imgur.com/5EVBfOY.gif',
            'https://imgur.com/3bUTsFr.gif',
            'https://imgur.com/e21XAEJ.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} deu um soco em ${user}.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Eiii! Violência não é permitida por aqui!`})

        const button = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new discord.MessageEmbed()
            .setDescription(`**${user} retribuiu o soco de ${interaction.user}.**`)
            .setColor(`#252585`)
            .setImage(`${random2}`)
            .setTimestamp()
            .setFooter({ text: `• Vocês pararão com isso agora!`})

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