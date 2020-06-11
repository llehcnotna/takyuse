const Discord = require('discord.js');
const request = require('snekfetch');

module.exports.run = async (client, message, args) => {

    // >advice

    let r = await request.get('http://api.adviceslip.com/advice');
    let advice = JSON.parse(r.body).slip.advice;

    let adviceEmbed = new Discord.RichEmbed()
    .setColor('#AFB8BF')
    .setDescription(`**${message.author.username}**, *${advice}*`);

    message.channel.send(adviceEmbed);

};

module.exports.help = {
    name: 'advice',
    aliases: ['']
};