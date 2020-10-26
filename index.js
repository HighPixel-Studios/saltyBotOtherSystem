const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const welcome = require('./welcome-message');


// client on
client.on('ready', () => {
    console.log('Client is ready.')
    welcome(client);

    // ping/test command
    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })

    // basic servers command
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members!`)
        })
    })

    // playing status command
    command(client, 'playing', message => {
        const content = message.content.replace(`${config.prefix}playing`, '')

        client.user.setPresence({
            activity: {
                name: content,
                type: 0
            }
        })
    })

    // verification command
    command (client, 'verify', (message) => {
        if (message.channel.id !== "745319534533148682") {

            return;
        }
        message.delete();
        message.member.roles.add("700627348394868758");
    })
    

})

client.login(config.token)
