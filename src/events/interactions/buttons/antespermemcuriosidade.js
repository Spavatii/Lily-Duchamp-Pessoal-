const { antespermemCuriosidade } = require('../../../lily/curiosidade/antespermem.json');
module.exports = {
    config: {
        name: 'antespermemcuriosidadebt',
        customId: 'antespermemcuriosidade',
    },
    run: async (client, interaction) => {
        interaction.reply(`__Antes de perder as memórias__ : ${antespermemCuriosidade[Math.floor(Math.random() * (antespermemCuriosidade.length))]}`)
    },
}