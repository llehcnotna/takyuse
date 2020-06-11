const Discord = require('discord.js');
const compliments = require('../json/compliments.json');

module.exports.run = async (client, message, args) => {

    // >compliment

    let compliment = compliments[Math.floor(Math.random() * compliments.length )]
    let toCompliment = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let selfComplimentEmbed = new Discord.RichEmbed()
    .setColor('')
    .setDescription(`**${message.author.username}**, *${compliment}*`)

    if(!toCompliment) return message.channel.send(selfComplimentEmbed);

    let complimentedEmbed = new Discord.RichEmbed()
    .setColor('')
    .setDescription(`**${toCompliment.user.username}**, *${compliment}*`)

    return message.channel.send(complimentedEmbed);

    };

module.exports.help = {
    name: 'compliment',
    aliases: ['']
};