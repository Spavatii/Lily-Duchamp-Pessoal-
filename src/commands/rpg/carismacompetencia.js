const discord = require('discord.js')
module.exports = {
    name: 'carismacompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Carisma',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Carisma")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row1 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('adestrar-animais')
                    .setLabel('Adestrar Animais | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('atuação')
                    .setLabel('Atuação | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('barganhar')
                    .setLabel('Barganhar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('blefe')
                    .setLabel('Blefe | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('canto')
                    .setLabel('Canto | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('credibilidade')
                    .setLabel('Credibilidade | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('dança')
                    .setLabel('Dança | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('diplomacia')
                    .setLabel('Diplomacia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('dramatização')
                    .setLabel('Dramatização | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('enganação')
                    .setLabel('Enganação | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row3 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('entrevista')
                    .setLabel('Entrevista | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('família')
                    .setLabel('Família | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('ilusionismo')
                    .setLabel('Ilusionismo | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('instrumento')
                    .setLabel('Instrumento | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('intimidação')
                    .setLabel('Intimidação | 2d10')
                    .setStyle('SECONDARY'),
            )

        const row4 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('lábia')
                    .setLabel('Lábia | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('manipulação')
                    .setLabel('Manipulação | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('negociar')
                    .setLabel('Negociar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('pedagogia')
                    .setLabel('Pedagogia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('persuasão')
                    .setLabel('Persuasão | 3d10')
                    .setStyle('SECONDARY'),
            )

        const row5 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('piratear')
                    .setLabel('Piratear | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('recursos')
                    .setLabel('Recursos | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('sedução')
                    .setLabel('Sedução | 2d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row1, row2, row3, row4, row5]} );
        },
    }