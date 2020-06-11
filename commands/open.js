const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >open

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**, you don't have permission to do that!`);

    message.channel.overwritePermissions(message.guild.id , {
        SEND_MESSAGES: true
    }).then(() => {
        message.channel.send(`**This channel has been reopened**`).then(function (message) {
            message.react('🔓');
        });
    });
};

module.exports.help = {
    name: 'open',
    aliases: ['']
};