const discord = require("discord.js")

module.exports = {
    name: 'valorinicialficha',
    description: 'Use a Lily para jogar o Valor de seu Dinheiro Inicial para Ficha, em todos cenários.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var mediev = Math.floor(Math.random() * (100 + 100 + 100 + 100)) + 10;
        var cyber = Math.floor(Math.random() * (100 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100)) + 3000;
        var mund = Math.floor(Math.random() * (100 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100)) + 10000;

        interaction.reply(`Seu Valor Inicial para Dinheiro, baseado no seu cenário, será:\n\n${mediev} > **Medieval**\n${cyber} > **Cyberpunk**\n${mund} > **Mundano**\n\nLogo abaixo os Valores estarão distribuídos separadamente, de acordo com o cenário, para que possa ser copiado. | <@${interaction.user.id}>`);
        
        interaction.channel.send(`${mediev} > **Medieval**`);
        interaction.channel.send(`${cyber} > **Cyberpunk**`);
        interaction.channel.send(`${mund} > **Mundano**`);
    }
}