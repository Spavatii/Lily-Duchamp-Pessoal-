const discord = require('discord.js')

module.exports = {
    name: 'abraço',
    description: 'Use Lily para abraçar um fiel.',
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
            'https://imgur.com/65VC0JS.gif',
            'https://imgur.com/FYkPsKw.gif',
            'https://imgur.com/7ygFl4o.gif',
            'https://imgur.com/u7swecy.gif',
            'https://imgur.com/rsJ8Uf2.gif',
            'https://imgur.com/QqC1phU.gif'
        ];

        var lista2 = [
            'https://imgur.com/65VC0JS.gif',
            'https://imgur.com/FYkPsKw.gif',
            'https://imgur.com/7ygFl4o.gif',
            'https://imgur.com/u7swecy.gif',
            'https://imgur.com/rsJ8Uf2.gif',
            'https://imgur.com/QqC1phU.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} deu um abraço caloroso em ${user}.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Os melhores são os calorosos, hihihi.`})

        const button = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new discord.MessageEmbed()
            .setDescription(`**${user} retribuiu o abraço caloroso de ${interaction.user}.**`)
            .setColor(`#252585`)
            .setImage(`${random2}`)
            .setTimestamp()
            .setFooter({ text: `• Aiii... se eu pudesse eu iria querer também... humph!`})

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
