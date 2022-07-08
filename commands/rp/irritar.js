const discord = require('discord.js')

module.exports = {
    name: 'irritar',
    description: 'Use Lily para irritar um fiel.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'fiel',
            type: 'USER',
            description: 'Especifique um fiel.',
            required: true,
        }
    ],
    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        let user = interaction.options.getUser('fiel')

        var lista1 = [
            'https://imgur.com/XQdFPV1.gif',
            'https://imgur.com/vjLWL5E.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];

        const embed = new discord.MessageEmbed()
            .setDescription(`**${interaction.user} está irritando ${user}.**`)
            .setImage(`${random1}`)
            .setColor(`#252585`)
            .setTimestamp()
            .setFooter({ text: `• Eu entendo... também tenho esses momentos, te-hee!`})

            interaction.reply({embeds: [embed]});

 }
}
