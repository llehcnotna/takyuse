const Discord = require('discord.js');
const roasts = require('../json/roasts.json');

module.exports.run = async (client, message, args) => {

    // >insult <user>

    const roast = roasts[Math.floor(Math.random() * roasts.length )]
    const toRoast = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   
    let selfRoast = new Discord.RichEmbed()
    .setColor('')
    .setDescription(`**${message.author.username}**, *${roast}*`)

    if(!toRoast) return message.channel.send(selfRoast);

    let roasted = new Discord.RichEmbed()
    .setColor('')
    .setDescription(`**${toRoast.user.username}**, *${roast}*`)

    return message.channel.send(roasted);
};

module.exports.help = {
    name: 'roast',
    aliases: ['']
};