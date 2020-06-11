const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >ship <user 1> <user 2>

    let replies = [`Will Never Work.`, `Slight Chance of Working.`, `👀`, `Can Work.`, `Could Work.`, `High Chance of Working.`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`];
    let result = Math.floor(Math.random() * replies.length);

    let mentionedUsers1 = message.mentions.users.first()
    let mentionedUsers2 = message.mentions.users.last()

    if (args.length <2) return message.channel.send(`Please specify two users next time!`);
    if(!mentionedUsers1) return message.channel.send(`Please specify two users next time!`);

    message.channel.send(replies[result]);

};

module.exports.help = {
    name: 'ship',
    aliases: ['']
};