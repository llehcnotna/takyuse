const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send(`**${message.author.username}**, Please input a calculation`);

let resp;
try {
    resp = math.evaluate(args.join(' '));
} catch (e) {
    return message.channel.send(`**${message.author.username}**, sorry, please input a valid calculation.`);
}

const calculateEmbed = new Discord.RichEmbed()
.setColor('#54DB88')
.setDescription('Math Calculation')
.addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
.addField('Output', `\`\`\`js\n${resp}\`\`\``);

message.channel.send(calculateEmbed);

};

module.exports.help = {
    name: 'calculate',
    aliases: ['calc', 'math']
};