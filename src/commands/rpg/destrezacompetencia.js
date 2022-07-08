const discord = require('discord.js')
module.exports = {
    name: 'destrezacompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Destreza.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Destreza")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('acrobacia')
                    .setLabel('Acrobacia | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('armas-brancas')
                    .setLabel('Armas Brancas | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('armas-curtas')
                    .setLabel('Armas Curtas | 1d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('armas-marciais')
                    .setLabel('Armas Marciais | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('armas-pesadas')
                    .setLabel('Armas Pesadas | 2d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('arte-marcial')
                    .setLabel('Arte Marcial | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('equilíbrio')
                    .setLabel('Equilíbrio | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('esquivar-escapar')
                    .setLabel('Esquivar/Escapar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('furtividade')
                    .setLabel('Furtividade | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('pilhagem')
                    .setLabel('Pilhagem | 3d10')
                    .setStyle('SECONDARY'),
            )

        const row3 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('prestidigitação')
                    .setLabel('Prestidigitação | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('roubo')
                    .setLabel('Roubo | 3d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row, row2, row3]} );
        },
    }