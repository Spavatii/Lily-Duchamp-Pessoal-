require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const Database = require('./src/config/database');
const db = new Database;
const activities_list = require('./src/lily/activities_list.json')
const type_list = require('./src/lily/type_list.json')
const images = require('./src/lily/images.json')
const Discord =  require('discord.js')

db.connect();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
    partials: [
        'MESSAGE',
        'GUILD_MEMBER',
        'USER',
        'CHANNEL',
    ],
});

['commands', 'aliases'].forEach(f => client[f] = new Collection());
['commands', 'events'].forEach(f => require(`./src/handlers/${f}`)(client));



setInterval(() => {
    const random = Math.floor(Math.random() * (images.length - 1) + 1); 
    client.user.setAvatar(images[random]); 
  }, 3600000);
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
    client.user.setActivity(activities_list[index], {type: type_list[index]}); 
  }, 900000);

client.login(process.env.token);