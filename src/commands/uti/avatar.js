const discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Veja o avatar de um fiel.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'fiel',
            type: 'USER',
            description: 'Fiel para ver avatar.',
            require: false,
        }
    ],
    run: async (client, interaction) => {
        let userMention = interaction.options.getUser('fiel');
        let person;

        if(!userMention) {
            person = interaction.user;
        } else {
            person = userMention;
        }

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        const embed = new discord.MessageEmbed()
            .setColor(`#252585`)
            .setTitle(`Imagem de ${person.username}`)
            .setImage(person.avatarURL({dynamic: true, format: "png", size: 1024}))
            .setTimestamp()
            .setURL(person.avatarURL({dynamic: true, format: "png", size: 1024}))
            .setFooter({ text: `• Seu desejo é uma ordem: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true, format: "png" }) })

        interaction.reply({embeds: [embed]});
    },
}