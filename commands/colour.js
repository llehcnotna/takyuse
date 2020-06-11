const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >colour <name>

    let rankEmbed = new Discord.RichEmbed()
    .setTitle('Available Roles')
    .setDescription(
        `\`teal\ngreen\nblue\ndarkblue\npurple\npink\nyellow\norange\nred\nbrown\``
    )
    .setFooter(`Use ${config.prefix}colour <colour> to change your colour.`);

    const acceptedRoles = [
        '692284269896138752',
        '688692813377961984',
        '688693050578436136',
        '688944675448684648',
        '688693088314458130',
        '688693154425471055',
        '688693187837296643',
        '688917088068567076',
        '688917133056540734',
        '688916662916743305',
    ]; 

    const exisitngRole = acceptedRoles.find(role => message.member.roles.has(role));
    const roleName = message.guild.roles.find(r => r.name === args.join(' '));

    if(args[0] === 'remove') {
        message.member.removeRole(exisitngRole);
        return message.channel.send(`**${message.author.username}**, your colour has been removed successfully`);
    };
    if(!args[0]) return message.channel.send(rankEmbed);
    if(!roleName) return message.channel.send(`No available role called "${args}", please use one listed.`);
    if(exisitngRole) await message.member.removeRole(exisitngRole);
    if(acceptedRoles.includes(roleName.id)) message.member.addRole(roleName);

    message.channel.send(`**${message.author.username}**, Your colour has been changed to: \`${roleName.name}\``);
};

module.exports.help = {
    name: 'colour',
    aliases: ['color']
};