const traduzir = require("@vitalets/google-translate-api")

module.exports = {
    name: "traduzir",
    description: "Traduzo o que desejar.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "pt",
            type: "STRING",
            description: "Escreva seu texto em portugês para ser traduzido em inglês.",
            required: false

        },
        {
            name: "en",
            type: "STRING",
            description: "Escreva seu texto em inglês para ser traduzido em portugês.",
            required: false

        }
    ],

    run: async (client, interaction) => {

        let pt = interaction.options.getString("pt");
        let en = interaction.options.getString("en");

        if (!pt && !en) {
            interaction.reply({ content: `Escolha uma das opções para que eu possa te ajudar a traduzir.`, ephemeral: true })
        } else if (pt) {
            let traduzido = await traduzir(`${pt}`, { from: 'pt', to: 'en' });
            interaction.reply(`\`${traduzido.text}\``)
        } else if (en) {
            let traduzido = await traduzir(`${en}`, { from: 'en', to: 'pt' });
            interaction.reply(`\`${traduzido.text}\``)
        }
    }
}