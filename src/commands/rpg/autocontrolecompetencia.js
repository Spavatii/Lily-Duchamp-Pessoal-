const discord = require('discord.js')
module.exports = {
    name: 'autocontrolecompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Autocontrole.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Autocontrole")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('improvisação')
                    .setLabel('Improvisação | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('interrogatório')
                    .setLabel('Interrogatório | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('manha')
                    .setLabel('Manha | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('oratória')
                    .setLabel('Oratória | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('psicanálise')
                    .setLabel('Psicanálise | 4d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('resistência-tortura-vícios')
                    .setLabel('Resistência Tortura/Vícios | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('sobrevivência')
                    .setLabel('Sobrevivência | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('traição-fidelidade')
                    .setLabel('Traição/Fidelidade | 4d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row, row2]} );
        },
    }