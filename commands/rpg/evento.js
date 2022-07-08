const discord = require("discord.js")

module.exports = {
    name: 'evento',
    description: 'Use a Lily para saber quando será o próximo evento do RPG.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        interaction.reply(`O próximo Evento do RPG Principal está marcado para: <t:1657242000:F> | Horário Mínimo: <t:1657238400:T> - Horário Limite: <t:1657242000:T> | Sujeito à mudanças | @everyone`);
        interaction.channel.send(`@everyone @everyone @everyone`)
    }
}