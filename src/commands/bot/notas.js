const discord = require('discord.js')
module.exports = {
    name: 'notas',
    description: 'Veja minhas Notas de Atualização.',
    type: 'CHAT_INPUT',

    run: async (client, interaction) => {

        if (!interaction.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return interaction.reply('Não é destinado para infiéis!')
        
            const embed = new discord.MessageEmbed()
            .setTitle("Notas de Atualização | Versão Atual : 1.3")
            .setDescription("Minhas fases... se estiver curioso veja meus progressos! | (Compilado de 6 em 6 para cada página)\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n")
            .addFields(
                { name: `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n・Versão : 1.0`, value: `\n┆1.0.1. Estruturação inicial da Lily criada.\n┆1.0.2. Criação de três novos Comandos: \n┆Cutucão - Avatar - Ajuda.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`, inline: false },
                { name: `・Versão : 1.1`, value: `\n┆1.1.1. Estruturação avançada da Lily criada.\n┆1.1.2. Arrumação de diversos pontos soltos.\n┆1.1.3. Criação da Estruturação das Fotos e Status da Lily.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`, inline: false },
                { name: `・Versão : 1.2`, value: `\n┆1.2.1. Criação de todos novos Comandos da Categoria RP.\n┆1.2.2. Criação de três novos Comandos: \n┆Erro - Dizer - Tradutor.\n┆1.2.3. Inserção da Lily no Server.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`, inline: false },
                { name: `・Versão : 1.3`, value: `\n┆1.3.1. Criação da Estruturação das Curiosidades da Lily.\n┆1.3.2. Criação de seis novos Comandos: \n┆Curiosidades - Notas - Boa Madrugada/Dia/Tarde/Noite.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`, inline: false },
                { name: `・Versão : 1.4`, value: `\n┆1.4.1. Criação da Respostas da Lily quando é marcada.\n┆1.4.2. Criação de três novos Comandos de RP: \n┆Acasalar - Gozar (+18) - Sex (+18).\n┆1.4.3. Criação de uma nova Resposta da Lily.\n┆1.4.4. Arrumação de um erro ortográfico.\n┆1.4.5. Criação de x novos Comandos: \n┆Guildavatar - Data (Recompensa).\n1.4.6. Criação de todos novos Comandos da Categoria RPG.\n1.4.7. Diversas correções de erros.\n▂▂ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ ▂▂\n`, inline: false },
            )
            .setFooter({ text: `• Seu desejo é uma ordem: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true, format: "png" }) })
            .setColor(`#252585`)
            .setImage('https://imgur.com/Rxp2Eh9.png')
            .setTimestamp()
            
            interaction.reply({embeds: [embed]});
        },
    }