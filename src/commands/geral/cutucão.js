const discord = require('discord.js');

module.exports = {
    name: 'cutucão',
    type: 'CHAT_INPUT',
    description: 'Verfique se Lily está funcionando.',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
            
          interaction.reply("Eiii, não me cutuce! Ao invés disso... chegue um pouco mais perto, senão... irei te cutucar também! Hihihi.");
    },
}