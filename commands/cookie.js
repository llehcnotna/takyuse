const Discord = require('discord.js');
const cookies = require('../json/cookies.json');

module.exports.run = async (client, message, args) => {

    // >cookie <user>

        let cookie = cookies[Math.floor(Math.random() * cookies.length )]
        let toGive = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
        if(!toGive) return message.channel.send(`**${message.author.username}**, mention someone to give a cookie to...`);
        if(toGive.id === message.author.id) return message.channel.send(`**${message.author.username}**, you can\'t give yourself a cookie silly..`);
    
        let cookieGiveEmbed = new Discord.RichEmbed()
        .setColor('#D99E82')
        .setDescription(`🍪** ${message.author.username}** *${cookie}*`)
        .setFooter(`${message.author.username} 🍪 ${toGive.user.username}`);
    
        return message.channel.send(cookieGiveEmbed);

    };

module.exports.help = {
    name: 'cookie',
    aliases: ['']
};