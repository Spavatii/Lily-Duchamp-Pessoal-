const discord = require("discord.js")

module.exports = {
    name: 'calendário',
    description: 'Use a Lily para ver o Calendário do RPG Principal.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        interaction.reply(`▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n6733/08/05 D.DA.\n\nSaga 02 (Lyra e o Caos) | Arco 04 (Bar da Meia-Noite) - Os Filhos de Galinndan foram revelados! Desavenças acontecem novamente.`);
    }
}