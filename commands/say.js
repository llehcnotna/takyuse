const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >say

    let botMessage = args.join(" ");
    message.delete()
    
    message.channel.send(botMessage);
};

module.exports.help = {
    name: "say",
    aliases: ['echo']
};