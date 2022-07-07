const discord = require("discord.js")

module.exports = {
    name: 'fichabase',
    description: 'Use a Lily para receber uma Ficha Base.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        interaction.reply(`• **Ficha Base** (Crua) :\n↳ https://docs.google.com/document/d/1JAlP1to3Nl92gVF3xGgmlTugAlbuRhmZ0nTBj0wG0AQ/edit?usp=sharing\n----------------------------------------------------------------------------------------------------\n\n• **Ficha Base** (Detalhada) :\n↳ https://docs.google.com/document/d/1jtnFbbdKNaCmaSKdi0gF0e-UT2ejyjJycwo9UWfRSL0/edit?usp=sharing\n----------------------------------------------------------------------------------------------------\n\n• **Ficha Base** (Dados) :\n↳ https://docs.google.com/document/d/1gSAO7j3vqqhOLOvwGSQRNGGvh3HtWB5WvnqNv7B1lQ8/edit?usp=sharing\n----------------------------------------------------------------------------------------------------`);
    }
}