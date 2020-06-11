const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >unmute <user>

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**, you don't have permission to do that!`);

    let muteRole = message.guild.roles.find(r => r.name === 'Muted');
    if(!muteRole) return message.channel.send('I couldn\'t find a role called \`Muted\` please create one or ask a server administrator.');

    let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!toMute) return message.channel.send(`**${message.author.username}**, couldn't find a user by that name.`);
    if(toMute.hasPermission('MANAGE_MESSAGES')) return message.reply(`**${message.author.username}**, they couldn\'t be muted in the first place...`);
    if(!toMute.roles.has(muteRole.id)) return message.channel.send('That user is not muted.');

    toMute.removeRole(muteRole.id);
    message.channel.send(`<@${toMute.id}> has been unmuted!`).then(function (message) {
        message.react('🎉');
    });
};

module.exports.help = {
    name: 'unmute',
    aliases: ['']
};