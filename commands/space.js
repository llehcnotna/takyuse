const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >space <message>

    let spaceMessage = args.join(' ');
    spaceMessage = spaceMessage.split('').join(' ');

    message.channel.send(spaceMessage)
};

module.exports.help = {
    name: 'space',
    aliases: ['']
};