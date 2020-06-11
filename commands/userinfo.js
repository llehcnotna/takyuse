const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    // >userinfo <user>

    let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
    let userIcon = user.displayAvatarURL;

    let userEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(userIcon)

    .addField('User Information:', `${member.displayName} | ${member.user.tag}\n(${member.user.id})`, true)
    .addField('Status:', `Playing : ${member.user.presence.game ? `**${member.user.presence.game.name}**`: '**Nothing.**'}\nStatus: **${user.presence.status}**`, true)
    .addField('Account Information:', `Joined Discord: \`${moment.utc(member.user.createdAt).format('MMMM Do YYYY')}\` *(${moment().diff(member.user.createdAt, 'days')} days ago)*\nJoined Server: \`${moment.utc(member.joinedAt).format('MMMM Do YYYY')}\` *(${moment().diff(member.joinedAt, 'days')} days ago)*`)

    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`);

    if(!message.mentions.users.first()) return message.channel.send(userEmbed);
    return message.channel.send(userEmbed);
};

module.exports.help = {
    name: 'userinfo',
    aliases: ['ui']
};