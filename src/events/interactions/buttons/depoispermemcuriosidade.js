const { depoispermemCuriosidade } = require('../../../lily/curiosidade/depoispermem.json');
module.exports = {
    config: {
        name: 'depoispermemcuriosidadebt',
        customId: 'depoispermemcuriosidade',
    },
    run: async (client, interaction) => {
        interaction.reply(`__Depois de perder as memórias__ : ${depoispermemCuriosidade[Math.floor(Math.random() * (depoispermemCuriosidade.length))]}`)
    },
}