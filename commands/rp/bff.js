const discord = require('discord.js')

module.exports = {
    name: 'bff',
    description: 'Use Lily para firmar amizade com um fiel.',
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
            'https://imgur.com/afDW5Ta.gif',
            'https://imgur.com/Oo0tDj4.gif',
            'https://imgur.com/cdRm91S.gif',
            'https://imgur.com/WMCvCYq.gif',
            'https://imgur.com/kjkWbuF.gif'
        ];

        var lista2 = [
            'https://imgur.com/afDW5Ta.gif',
            'https://imgur.com/Oo0tDj4.gif',
            'https://imgur.com/cdRm91S.gif',
            'https://imgur.com/WMCvCYq.gif',
            'https://imgur.com/kjkWbuF.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está firmando amizade com ${user}.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Lembre-se de usar os dedinhos...!`})

        const button = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Firmar')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new discord.MessageEmbed()
            .setDescription(`**${user} firmou uma amizade verdadeira com ${interaction.user}.**`)
            .setColor(`#252585`)
            .setImage(`${random2}`)
            .setTimestamp()
            .setFooter({ text: `• Agora estão conectados para sempre! Hihihi.`})

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
