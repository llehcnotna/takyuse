const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {

    // >dog

        let{body} = await superagent
        .get(`https://random.dog/woof.json`);

        let dogEmbed = new Discord.RichEmbed()
        .setColor('#CCD6DD')
        .setTitle('🐶 Dog')
        .setImage(body.url);

        message.channel.send(dogEmbed);
    
    };

module.exports.help = {
    name: 'dog',
    aliases: ['doggo', 'pupper', 'pooch']
};