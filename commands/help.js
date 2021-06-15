const Discord = require ('discord.js')
module.exports = {
    name:'help',
    description:'This is a help command',
    execute(message, args, cleint, discord){
        const help = new Discord.MessageEmbed()
        .setTitle('All commands of this bot')
        .setDescription(`MEMBER COMMANDS \n 1.!slap\nslaps a member 'obviously with gif not irl lol'\n 2.!hug\n hugs a member\n3.!scare\nscares a member\n!respect\nGIves respect to a member\nticket makes a private text channel for u\nADMIN COMMANDS\n!kick  or !ban\n kicks and bans a member\nticket reactions\n to close the channel or delete it\n!mute or !unmute\n mutes or unmutes a member you can also set time of the mute by !mute @member 10s\n!clear 100\nclears 100 messgaes`)
        .setAuthor('Yuvraj')
        .setFooter('check the rules')
        message.channel.send(help)
    }
}