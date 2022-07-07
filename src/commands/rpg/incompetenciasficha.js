const discord = require("discord.js")

module.exports = {
    name: 'incompetenciasficha',
    description: 'Use a Lily para jogar todos seus valores de Incompetências para Ficha.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')

        var incomp1 = Math.floor(Math.random() * (100)) * 100;
        var incomp2 = Math.floor(Math.random() * (100)) * 100;
        var incomp3 = Math.floor(Math.random() * (100)) * 100;
        var incomp4 = Math.floor(Math.random() * (100)) * 100;
        var incomp5 = Math.floor(Math.random() * (100)) * 100;
        var incomp6 = Math.floor(Math.random() * (100)) * 100;
        var incomp7 = Math.floor(Math.random() * (100)) * 100;
        var incomp8 = Math.floor(Math.random() * (100)) * 100;
        var incomp9 = Math.floor(Math.random() * (100)) * 100;
        var incomp10 = Math.floor(Math.random() * (100)) * 100;
        var incomp11 = Math.floor(Math.random() * (100)) * 100;
        var incomp12 = Math.floor(Math.random() * (100)) * 100;
        var incomp13 = Math.floor(Math.random() * (100)) * 100;
        var incomp14 = Math.floor(Math.random() * (100)) * 100;


        interaction.reply(`Seus 14 Valores para Incompetências serão: ${incomp1} - ${incomp2} - ${incomp3} - ${incomp4} - ${incomp5} - ${incomp6} - ${incomp7} - ${incomp8} - ${incomp9} - ${incomp10} - ${incomp11} - ${incomp12} - ${incomp13} - ${incomp14}\n\nLogo abaixo os Valores estarão distribuídos em ordem crescente. | <@${interaction.user.id}>`)
        
        let resultados = [
        
        incomp1, incomp2, incomp3, incomp4, incomp5, incomp6, incomp7, incomp8, incomp9, incomp10, incomp11, incomp12, incomp13, incomp14
        ];

        resultados.sort((a, b) => a - b);
        
        interaction.channel.send(`${resultados}`);
    }
}