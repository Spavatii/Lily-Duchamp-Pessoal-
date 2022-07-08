const discord = require('discord.js');

module.exports = {
    name: 'ajuda',
    type: 'CHAT_INPUT',
    description: 'Veja os comandos.',
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        let commands = client.commands;
        const embed = new discord.MessageEmbed()
        .setColor(`#252585`)
        .setTitle('Comandos da Imperatriz.')
        .setDescription(`Sinta-se livre para me usar à vontade, o que é meu é seu.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`)
        .setImage('https://imgur.com/Rxp2Eh9.png')
        .setTimestamp()
        .setFooter({ text: `• Seu desejo é uma ordem: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true, format: "png" }) })
        commands.forEach(command => {
            embed.addField(`Comando: ${command.name}`, `Descrição: ${command.description}`, false)
        });
        interaction.reply({ embeds: [embed] });
    },
};