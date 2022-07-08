const discord = require("discord.js")

module.exports = {
    name: 'data',
    description: 'Use a Lily para ver a data.',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        let date = new Date();

        let day = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        let days = day[date.getDay()]
        
        let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        let months = month[date.getMonth()]
        
        interaction.reply(`De acordo com seu calendário: hoje é ${days}, dia ${date.getDate()}, do mês ${months} e do ano ${date.getFullYear()}.`)
    }
}