const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >rate <arg>

    let item = message.content.split(/\s+/g).slice(1).join(' ');
    if(!item) return message.channel.reply(`**${message.author.username}**, please specify something for me to rate!`);

    if(item.toUpperCase().startsWith('TAKYUSE')) return message.channel.send('I\'d give myself a `10/10`');

    const rating = Math.floor(Math.random() * 10) + 0;
    return message.channel.send(`I'd give **${item}** a \`${rating}/10\``);
    
};

module.exports.help = {
    name: 'rate',
    aliases: ['']
};