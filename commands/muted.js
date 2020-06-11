const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >muted

    let muteRole = message.guild.roles.find(r => r.name === 'Muted');
    if(!muteRole) return message.channel.send('I couldn\'t find a role called \`Muted\` please create one or ask a server administrator.');

    let membersWithRole = (muteRole).members;
    let notMuted = false || null || undefined || '' || 0 || -0;

    let notMutedEmbed = new Discord.RichEmbed()
    .setColor('#CCD6DD')
    .setTitle('🔊 There are no users muted on this server.');

    if(membersWithRole.size === 0) return message.channel.send(notMutedEmbed);

    let mutedEmbed = new Discord.RichEmbed()
    .setColor('#DD2E44')
    .setTitle(`🔇 Users ${muteRole.name}`)
    .setDescription(membersWithRole.array().join('\n'));

    return message.channel.send(mutedEmbed);
};

module.exports.help = {
    name: 'muted',
    aliases: ['']
};