const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '!';

const fs = require('fs');
const got = require('got')
const db = require('quick.db')
const disbut = require('discord-buttons')(client)
const membercount = require('./counter/membercount')
const math = require('mathjs')

client.commands = new Discord.Collection
client.events = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log('godbot is online!');
     membercount(client) 
    });

    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
     
        guildMember.roles.add(welcomeRole);
       const channel = guildMember.guild.channels.cache.get('849958209962639390')
        const welcomeembed = new Discord.MessageEmbed()
        .setTitle(`hi <a:welcomeemote:853287461110153246>`)
        .setDescription(`Welcome  <@${guildMember.user.id}> to our server make sure to check out our rules-information channel 🎆🎈𝖗𝖚𝖑𝖊𝖘-𝖆𝖓𝖉-𝖎𝖓𝖋𝖔🎈🎆 and chat in ♥✌𝖑𝖔𝖚𝖓𝖌𝖊✌♥`)
        .addFields(
            {name:'basic',value:'rules'},
            {name:'Rule 1.',value:'Dont abuse'},
            {name:'Rule 2.',value:'Be nice'},
            {name:'Rule 3.',value:'Do that again so be double nice'},
            {name:'Rule 4.',value:'Help each other'}
        )
        .setThumbnail(guildMember.user.displayAvatarURL())
        .setImage('https://media1.tenor.com/images/96910a7cedeff19c958ac2a78286bd6f/tenor.gif?itemid=15248522')
        .setFooter('Also sub to my channel')
        channel.send(welcomeembed)
    });




client.on('message', async message => {
    if (message.content === "!meme") {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }
  
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const user = message.mentions.users.first() || message.author

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args)
    }if(command === 'kick'){
        client.commands.get('kick').execute(message, args)
    }if(command === 'slap'){
        client.commands.get('slap').execute(message, args)
    }if(command === 'hug'){
        client.commands.get('hug').execute(message, args)
    }if(command === 'mute'){
        client.commands.get('mute').execute(message, args)
    }if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args)
    }if(command === 'respect'){
        client.commands.get('respect').execute(message, args)
    }if(command === 'scare'){
        client.commands.get('scare').execute(message, args)
    }if(command === 'help'){
        client.commands.get('help').execute(message, args)
    }if(command === 'test'){
     
    }if(command === 'clear'){
        client.commands.get('clear').execute(message, args)
    }if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args)
    }
    


});  


client.login('token');
