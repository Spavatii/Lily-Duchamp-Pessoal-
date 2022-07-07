const { ready } = require('../../lily/ready.json');

module.exports = async (client) => {
    console.log(client.user.tag + ' está no ar com sucesso!');
    client.on('messageCreate', (message) => {
        if(!message.member.roles.cache.some(r => r.name === 'Jogador de RPG')) return false;
        if(message.author.bot) return;

        if(message.content.includes(client.user)) {
            message.reply(ready[Math.floor(Math.random() * (ready.length))])
        }
        if(message.content === 'ANIV') {
            message.channel.send("Eu tinha esquecido.... mas hoje é meu... ANIVERSÁRIO!!! ME DIGA QUE VOCÊ LEMBROU NÉ??? Hehehehehe, obrigada!!!! Fico feliz... de verdade... não gostava de aniversários... mas talvez eu tenha começado a gostar... por que será?! Hihihi. | <t:1655348400:F>")
        }
})
};