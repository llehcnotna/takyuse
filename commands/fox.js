const Discord = require('discord.js');
const request = require('node-superfetch');

module.exports.run = async (client, message, args) => {

    // >lizard

        let{body} = await request
        .get(`https://randomfox.ca/floof/`);
      
        let catEmbed = new Discord.RichEmbed()
        .setColor('#F4900C')
        .setTitle('🦊 Fox')
        .setImage(body.image);
      
        message.channel.send(catEmbed);
    };

module.exports.help = {
    name: 'fox',
    aliases: ['']
};
