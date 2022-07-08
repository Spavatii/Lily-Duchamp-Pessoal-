const discord = require('discord.js')
module.exports = {
    name: 'inteligênciacompetencia2',
    description: 'Use Lily para ter ciência de todas Competências de Inteligência: Parte 2.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Inteligência: Parte 2")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row1 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('investigação')
                    .setLabel('Investigação | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('jogo')
                    .setLabel('Jogo | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('linguagem-nativa')
                    .setLabel('Linguagem Nativa | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('matemática')
                    .setLabel('Matemática | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('medicina')
                    .setLabel('Medicina | 4d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('mercado-de-ações')
                    .setLabel('Mercado de Ações | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('musicologia')
                    .setLabel('Musicologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('oceanografia')
                    .setLabel('Oceanografia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('operar-máquina')
                    .setLabel('Operar Máquina | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('operar-máquina-pesada')
                    .setLabel('Operar Máquina Pesada | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row3 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('operar-tanques-criogênicos')
                    .setLabel('Operar Tanques Criogênicos | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('outra-linguagem')
                    .setLabel('Outra Linguagem | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('pilotar-máquina')
                    .setLabel('Pilotar Máquina | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('pilotar-máquina-pesada')
                    .setLabel('Pilotar Máquina Pesada | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('psicologia')
                    .setLabel('Psicologia | 4d10')
                    .setStyle('SECONDARY'),
            )

        const row4 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('química')
                    .setLabel('Química | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('religião-teologia')
                    .setLabel('Religião/Teologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('reparo-elétrico')
                    .setLabel('Reparo Elétrico | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('reparo-mecânico')
                    .setLabel('Reparo Mecânico | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('sexologia')
                    .setLabel('Sexologia | 4d10')
                    .setStyle('SECONDARY'),
            )

        const row5 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('sociologia')
                    .setLabel('Sociologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('tecnologia')
                    .setLabel('Tecnologia | 4d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row1, row2, row3, row4, row5]} );
        },
    }