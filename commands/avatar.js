const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >avatar <user>

    let user = message.mentions.users.first() || message.author;

    let avatarEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${user.tag}`)
    .setImage(user.displayAvatarURL)

    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`);

    if(!message.mentions.users.first()) return message.channel.send(avatarEmbed);
    message.channel.send(avatarEmbed);
};

module.exports.help = {
    name: 'avatar',
    aliases: ['pfp']
};