const Discord = require('discord.js');

const { MessageAttachment, MessageEmbed } = require('discord.js');

const client = new Discord.Client();

const prefix = '!!'


var errorMessage = [
    'console',
    'army',
]

client.once('ready', () => {
    //Write logs when the bot is up
    console.error('maybe the bot is ready, just maybe...')
    console.log('Asami is online?');
});
function pic() {
    
    var picIndex = Math.floor(Math.random() * 20)
    link = pics[picIndex]
    console.log(picIndex)
    return link
}

client.on('message', message =>{
    // The command startwith prefix setting
    if(!message.content.startsWith(prefix || message.author.bot || '!n')) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //Command start here
    if (command == 'ping') {
        message.channel.send('ping')
    };
});

// client.on('ready', () => {
//     //The discord custom status, console is not the core
//     console.error('sus')
//     client.user.setActivity(`me getting tested by my owner :<`, { type: "WATCHING" })
// });

// const devID = ' '

client.login('OTg0NzA1MDg0ODE2NTIzMzI2.GGRnrL.vT904AkzNQS-pUPk4dMnrQHhU450T8XPO8JK7Y')
//  client.login(process.env.token); //The bot token which have setted in heroku
