const discord = require('discord.js')

module.exports = {
    name: 'acasalar',
    description: 'Use Lily para acasalar um fiel.',
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
            'https://imgur.com/w3J2Vhn.gif',
            'https://imgur.com/Cd3MB6w.gif',
            'https://imgur.com/yS00FtM.gif',
            'https://imgur.com/QPu8Clc.gif',
            'https://imgur.com/RO2uhAC.gif'
        ];

        var lista2 = [
            'https://imgur.com/w3J2Vhn.gif',
            'https://imgur.com/Cd3MB6w.gif',
            'https://imgur.com/yS00FtM.gif',
            'https://imgur.com/QPu8Clc.gif',
            'https://imgur.com/RO2uhAC.gif'
        ];


        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} chamou ${user} para um acasalamento.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Eiii... eu também quero...`})

        const button = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Acasalar')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new discord.MessageEmbed()
            .setDescription(`**${user} aceitou o acasalamento de ${interaction.user}.**`)
            .setColor(`#252585`)
            .setImage(`${random2}`)
            .setTimestamp()
            .setFooter({ text: `• ... quando chegará a minha vez...?`})

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
