const Discord = require('discord.js');
const config = require('../config.json');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    // >botinfo

    let clientIcon = client.user.displayAvatarURL;

    let clientEmbed = new Discord.RichEmbed()
    .setColor('#54DB88')

    .addField('Client Name', `${client.user.username}`, true).addField('Client Prefix', `**${config.prefix}**`, true).addField('Created on', `${moment.utc(client.user.createdAt).format('MMMM Do YYYY')}`, true)
    .addField(`About ${client.user.username}`, `${client.user.username} was created as a server moderation bot\nand is part of the second iteration of Defaults bots.\n\nTakyuse is built using discord.js [${Discord.version}](https://discord.js.org/#/docs/main/11.6.2/general/welcome)`)

    .setFooter(`| Created by: Default | Inspired by: FSY | Profile picture: Hersy |`, `${clientIcon}`);

    return message.channel.send(clientEmbed);
};

module.exports.help = {
    name: 'botinfo',
    aliases: ['info', 'bi']
};