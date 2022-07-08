const discord = require("discord.js")

module.exports = {
    name: 'atributosficha',
    description: 'Use a Lily para jogar todos seus valores de Atributo para Ficha.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var d2d4A = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4B = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4C = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4D = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4E = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4F = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4G = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4H = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;
        var d2d4I = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2;

        var d20 = Math.floor(Math.random() * 20) + 1;

        interaction.reply(`Seus 9 Valores para Atributos serão: ${d2d4A} - ${d2d4B} - ${d2d4C} - ${d2d4D} - ${d2d4E} - ${d2d4F} - ${d2d4G} - ${d2d4H} - ${d2d4I} | Valor do Atributo Sorte: ${d20}\n\nLogo abaixo os Valores estarão distribuídos em ordem crescente. O Valor da Sorte será mostrado depois dos 9. | <@${interaction.user.id}>`)
        
        let resultados = [
        
        d2d4A, d2d4B, d2d4C, d2d4D, d2d4E, d2d4F, d2d4G, d2d4H, d2d4I
        ];

        resultados.sort((a, b) => a - b);
        
        interaction.channel.send(`${resultados} - ${d20}`);
    }
}