const { atualmentememCuriosidade } = require('../../../lily/curiosidade/atualmentemem.json');
module.exports = {
    config: {
        name: 'atualmentememcuriosidadebt',
        customId: 'atualmentememcuriosidade',
    },
    run: async (client, interaction) => {
        interaction.reply(`__Atualmente__ : ${atualmentememCuriosidade[Math.floor(Math.random() * (atualmentememCuriosidade.length))]}`)
    },
}