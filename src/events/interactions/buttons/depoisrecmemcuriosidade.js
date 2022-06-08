const { depoisrecmemCuriosidade } = require('../../../lily/curiosidade/depoisrecmem.json');
module.exports = {
    config: {
        name: 'depoisrecmemcuriosidadebt',
        customId: 'depoisrecmemcuriosidade',
    },
    run: async (client, interaction) => {
        interaction.reply(`__Depois de recuperar as memórias__ : ${depoisrecmemCuriosidade[Math.floor(Math.random() * (depoisrecmemCuriosidade.length))]}`)
    },
}