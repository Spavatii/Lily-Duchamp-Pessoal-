const discord = require("discord.js")

module.exports = {
    name: 'competenciasficha',
    description: 'Use a Lily para jogar todos seus valores de Competências para Ficha.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var comp1 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp2 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp3 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp4 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp5 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp6 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;
        var comp7 = Math.floor(Math.random() * (100 + 100 + 100 + 100)) * 100;

        interaction.reply(`Seus 7 Valores para Competências Aprendidas serão: ${comp1} - ${comp2} - ${comp3} - ${comp4} - ${comp5} - ${comp6} - ${comp7}\n\nLogo abaixo os Valores estarão distribuídos em ordem crescente. | <@${interaction.user.id}>`)
        
        let resultados = [
        
        comp1, comp2, comp3, comp4, comp5, comp6, comp7
        ];

        resultados.sort((a, b) => a - b);
        
        interaction.channel.send(`${resultados}`);
    }
}