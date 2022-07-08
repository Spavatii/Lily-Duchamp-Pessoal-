const discord = require('discord.js')
module.exports = {
    name: 'forçacompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Força.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Força")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('a-distância')
                    .setLabel('A Distância | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('a-distância-pesado')
                    .setLabel('A Distância Pesado | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('agarrar')
                    .setLabel('Agarrar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('arremessar')
                    .setLabel('Arremessar | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('cabeçada')
                    .setLabel('Cabeçada | 1d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('chute')
                    .setLabel('Chute | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('corpo-a-corpo')
                    .setLabel('Corpo a Corpo | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('corpo-a-corpo-pesado')
                    .setLabel('Corpo a Corpo Pesado | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('musculação')
                    .setLabel('Musculação | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('soco-punho')
                    .setLabel('Soco/Punho | 1d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row, row2]} );
        },
    }