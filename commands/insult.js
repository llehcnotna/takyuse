const Discord = require('discord.js');
const insults = require('../json/insults.json');

module.exports.run = async (client, message, args) => {

    // >insult

    return message.channel.send('No')
    let insult = insults[Math.floor(Math.random() * insults.length )]
    let insultEmbed = new Discord.RichEmbed()
    .setColor('')
    .setDescription(`**${message.author.username}**, *${insult}*`)

    return message.channel.send(insultEmbed);

    };

module.exports.help = {
    name: 'insult',
    aliases: ['']
};