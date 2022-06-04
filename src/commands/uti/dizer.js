const discord = require("discord.js")

module.exports = {
    name: 'dizer',
    description: 'Use a Lily para dizer algo para você.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'frase',
            type: 'STRING',
            description: 'Indique o que deseja.',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        interaction.reply({content: interaction.options.getString('frase')});
    }
}