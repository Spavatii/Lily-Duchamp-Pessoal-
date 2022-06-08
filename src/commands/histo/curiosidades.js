const discord = require('discord.js');

module.exports = {
    name: 'curiosidades',
    type: 'CHAT_INPUT',
    description: 'Saiba uma curiosidade minha.',
    
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setTitle("Curiosidades da Imperatriz das Sombras!")
            .setDescription("Se quiser saber de mim... me use!!! Melhor jeito de saber verdadeiramente de algo... é pela sua fonte... hihihi.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n")
            .setFooter({ text: `• Seu desejo é uma ordem: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true, format: "png" }) })
            .setColor(`#252585`)
            .setImage('https://imgur.com/Rxp2Eh9.png')
            .setTimestamp()

        const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('meio1')
                    .setLabel('👑')
                    .setStyle('SECONDARY')
                    .setDisabled(true),
                new discord.MessageButton()
                    .setCustomId('atualmentememcuriosidade')
                    .setLabel('Atualmente')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('antespermemcuriosidade')
                    .setLabel('Antes Perder Memórias')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('meio3')
                    .setLabel('👑')
                    .setStyle('SECONDARY')
                    .setDisabled(true),
            )
            const row2 = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('meio4')
                    .setLabel('⚜️')
                    .setStyle('SECONDARY')
                    .setDisabled(true),
                new discord.MessageButton()
                    .setCustomId('depoispermemcuriosidade')
                    .setLabel('Depois Perder Memórias')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('depoisrecmemcuriosidade')
                    .setLabel('Depois Recuperar Memórias')
                    .setStyle('SECONDARY'),
                new discord.MessageButton()
                    .setCustomId('meio6')
                    .setLabel('⚜️')
                    .setStyle('SECONDARY')
                    .setDisabled(true),
            )

        interaction.reply({ embeds: [embed], components: [row, row2] })
    },
};