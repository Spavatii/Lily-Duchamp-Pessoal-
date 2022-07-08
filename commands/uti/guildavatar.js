const discord = require('discord.js');

module.exports = {
    name: 'guildavatar',
    description: 'Veja a foto do server.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setColor(`#252585`)
            .setTitle(`Imagem de ${interaction.guild.name}`)
            .setImage(interaction.guild.iconURL({dynamic: true, format: "png", size: 1024}))
            .setTimestamp()
            .setURL(interaction.guild.iconURL({dynamic: true, format: "png", size: 1024}))
            .setFooter({ text: `• Seu desejo é uma ordem: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true, format: "png" }) })

        interaction.reply({embeds: [embed]});
    },
}