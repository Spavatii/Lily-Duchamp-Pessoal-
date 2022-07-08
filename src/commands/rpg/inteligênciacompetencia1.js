const discord = require('discord.js')
module.exports = {
    name: 'inteligênciacompetencia1',
    description: 'Use Lily para ter ciência de todas Competências de Inteligência: Parte 1.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Inteligência: Parte 1")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row1 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('antropologia')
                    .setLabel('Antropologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('arqueologia')
                    .setLabel('Arqueologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('arquerismo')
                    .setLabel('Arquerismo | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('arte')
                    .setLabel('Arte | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('astronomia')
                    .setLabel('Astronomia | 4d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('biologia')
                    .setLabel('Biologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('cartografia')
                    .setLabel('Cartografia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('chaveiro')
                    .setLabel('Chaveiro | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('condução')
                    .setLabel('Condução | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('conhecimento-de-sistemas')
                    .setLabel('Conhecimento de Sistemas | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row3 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('contabilidade')
                    .setLabel('Contabilidade | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('direito-legislação')
                    .setLabel('Direito/Legislação | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('educação-e-cultura-geral')
                    .setLabel('Educação e Cultura Geral | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('eletrônica')
                    .setLabel('Eletrônica | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('esgrima')
                    .setLabel('Esgrima | 3d10')
                    .setStyle('SECONDARY'),
            )

        const row4 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('especialista')
                    .setLabel('Especialista | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('exploração')
                    .setLabel('Exploração | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('física')
                    .setLabel('Física | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('gastronomia')
                    .setLabel('Gastronomia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('geografia')
                    .setLabel('Geografia | 4d10')
                    .setStyle('SECONDARY'),
            )

        const row5 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('geologia')
                    .setLabel('Geologia | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('herbalismo')
                    .setLabel('Herbalismo | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('história')
                    .setLabel('História | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('história-natural')
                    .setLabel('História Natural | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('interpretar')
                    .setLabel('Interpretar | 3d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row1, row2, row3, row4, row5]} );
        },
    }