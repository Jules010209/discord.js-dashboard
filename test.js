const { Client, Intents } = require('discord.js');
const colors = require('colors');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const dashboard = require('./index');

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!'
}];

const rest = new REST({ version: '9' }).setToken('TOKEN');

const client = new Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    partials: [ 'MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'USER' ],
    presence: {
        activities: [
            {
                name: 'des utilisateurs',
                type: 'WATCHING',
                url: 'https://www.oxie.fr/?utm_source=discord'
            }
        ],
        status: 'idle',
    },
});

dashboard.setClient(client);

client.once('ready', () => {
    console.log(colors.bgWhite(' * ') + colors.bgBlue(' Bot was connected ! '));

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
      
            client.guilds.cache.forEach(async guild => {
                await rest.put(Routes.applicationGuildCommands('931977311450968144', guild.id), { body: commands });
            });
      
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
});

client.on('interactionCreate', async message => {
    if(!message.isCommand()) return;
    
    if(message.commandName === 'ping') {
        await message.reply({ content: 'pong' });

        client.application.commands.cache.forEach((e) => {
            message.reply({ content: `${e.name}` });
        });
    }
});

// client.login('TOKEN');
client.login('TOKEN');
