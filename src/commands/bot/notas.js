const discord = require('discord.js')
module.exports = {
    name: 'notas',
    description: 'Veja minhas Notas de Atualização.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        
        let pageNumber = 1;
            const embed = new discord.MessageEmbed()
            .setColor(`#252585`)
            .setImage('https://imgur.com/Rxp2Eh9.png')
            .setTimestamp()
            .setFooter({ text: `Página ${pageNumber}/4`})
            const row = new discord.MessageActionRow()
			.addComponents(
				new discord.MessageButton()
					.setCustomId('prev')
					.setLabel('◀')
					.setStyle('SECONDARY')
                    .setDisabled(pageNumber <= 1),
                new discord.MessageButton()
                    .setCustomId('meio')
					.setLabel('⚜️')
					.setStyle('SECONDARY')
                    .setDisabled(true),
                new discord.MessageButton()
					.setCustomId('next')
					.setLabel('▶')
					.setStyle('SECONDARY')
                    .setDisabled(!(pageNumber < 4)),
			);

            interaction.reply({embeds: [embed], components: [row]});
        },
    }