const discord = require('discord.js')
module.exports = {
    name: 'cogniçãocompetencia',
    description: 'Use Lily para ter ciência de todas Competências de Cognição',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Competências de Cognição")
            .setColor(`#252585`)
            .setImage(`https://imgur.com/Rxp2Eh9.png`)

        const row1 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('aperfeiçoar')
                    .setLabel('Aperfeiçoar | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('atenção-notar')
                    .setLabel('Atenção/Notar | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('caça')
                    .setLabel('Caça | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('cheirar')
                    .setLabel('Cheirar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('compreender')
                    .setLabel('Compreender | 2d10')
                    .setStyle('SECONDARY'),
            )
            
        const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('criação')
                    .setLabel('Criação | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('degustar')
                    .setLabel('Degustar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('demolições')
                    .setLabel('Demolições | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('esconder-evadir')
                    .setLabel('Esconder/Evadir | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('escrever')
                    .setLabel('Escrever | 3d10')
                    .setStyle('SECONDARY'),
            )
            
        const row3 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('escutar')
                    .setLabel('Escutar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('ler')
                    .setLabel('Ler | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('localizar')
                    .setLabel('Localizar | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('mira')
                    .setLabel('Mira | 4d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('natureza')
                    .setLabel('Natureza | 3d10')
                    .setStyle('SECONDARY'),
            )

        const row4 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('navegar')
                    .setLabel('Navegar | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('noção-de-combate')
                    .setLabel('Noção de Combate | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('ocultar')
                    .setLabel('Ocultar | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('olhar')
                    .setLabel('Olhar | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('percepção')
                    .setLabel('Percepção | 2d10')
                    .setStyle('SECONDARY'),
            )

        const row5 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('pesquisar-biblioteca')
                    .setLabel('Pesquisar Biblioteca | 2d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('sombra-rastreamento')
                    .setLabel('Sombra/Rastreamento | 3d10')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('toque')
                    .setLabel('Toque | 2d10')
                    .setStyle('SECONDARY'),
            )

            interaction.reply({ embeds: [embed], components: [row1, row2, row3, row4, row5]} );
        },
    }