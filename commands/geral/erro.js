const discord = require('discord.js');

module.exports = {
    name: 'erro',
    type: 'CHAT_INPUT',
    description: 'Verfique se Lily está funcionando, como um erro.',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        interaction.reply("Ops... não sei o que você está querendo direito... seja mais claro ou peça para meu Kritis.");
    },
}