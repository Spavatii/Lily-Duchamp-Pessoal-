const discord = require('discord.js')
module.exports = {
    name: 'cerneessênciacompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Cerne/Essência.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Cerne/Essência")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('arcanismo')
                    .setLabel('Arcanismo | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('contemplação')
                    .setLabel('Contemplação | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('energismo')
                    .setLabel('Energismo | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('intuição')
                    .setLabel('Intuição | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('misticismo')
                    .setLabel('Misticismo | 4d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('ocultismo')
                    .setLabel('Ocultismo | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('ofício')
                    .setLabel('Ofício | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('poetização')
                    .setLabel('Poetização | 4d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row, row2]} );
        },
    }