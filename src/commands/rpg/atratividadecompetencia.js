const discord = require('discord.js')
module.exports = {
    name: 'atratividadecompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Atravidade.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Atravidade")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('autoridade')
                    .setLabel('Autoridade | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('comunicação')
                    .setLabel('Comunicação | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('disfarce')
                    .setLabel('Disfarce | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('elegantismo')
                    .setLabel('Elegantismo | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('etiqueta')
                    .setLabel('Etiqueta | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('liderança')
                    .setLabel('Liderança | 4d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row, row2]} );
        },
    }