const Discord = require('discord.js');
const list = require('../json/util.js');
const sentences = require('../json/typing-test.json')

module.exports.run = async (client, message, args,) => {

    // >typing-test <argument>

    const sentence = sentences[Math.floor(Math.random() * sentences.length)];

    if(args[0] === 'baby') {
        
        await message.channel.send(`**${message.author.username}**, you have ${60000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 60000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`Nice job! you deserve some cake! \`(Took ${(Date.now() - now) / 1000} seconds)\``);
    
    };
    
    if(args[0] === 'easy') {
        await message.channel.send(`**${message.author.username}**, you have ${25000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 25000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`Nice job! you deserve some cake! \`(Took ${(Date.now() - now) / 1000} seconds)\``);

    };

    if(args[0] === 'medium'){
        await message.channel.send(`**${message.author.username}**, you have ${20000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 20000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`Nice job! you deserve some cake! \`(Took ${(Date.now() - now) / 1000} seconds)\``);

    };

    if(args[0] === 'hard'){
        await message.channel.send(`**${message.author.username}**, you have ${15000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 15000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`Nice job! you deserve some cake! \`(Took ${(Date.now() - now) / 1000} seconds)\``);

    };

    if(args[0] === 'extreme'){

        await message.channel.send(`**${message.author.username}**, you have ${10000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 10000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`Nice job! you deserve some cake! \`(Took ${(Date.now() - now) / 1000} seconds)\``);

    };

    if(args[0] === 'impossible'){
        
        await message.channel.send(`**${message.author.username}**, you have ${5000 / 1000} seconds to type this sentence.\n\`\`\`${sentence}\`\`\``);

        const now = Date.now();
        const messages = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 5000
    
        });
        if(!messages.size) return message.channel.send(`Sorry **${message.author.username}**, you lose!`);
        if(messages.first().content !== sentence) return message.reply(`Sorry **${message.author.username}**, you made a typo, so you lose!`);
    
        return message.channel.send(`What the... you god... \`(Took ${(Date.now() - now) / 1000} seconds)\``);

    };

    if(!args[0]) {
        let typingTestEmbed = new Discord.RichEmbed()
        .setColor('')
        .setDescription(`⌨️ **Choose a level**\nbaby: \`60 sec\`\neasy: \`25 sec\`\nmedium: \`20 sec\`\nhard: \`15\`\nextreme: \`10 sec\`\nimpossible:\`5 sec\``)

        return message.channel.send(typingTestEmbed);
    }

};

module.exports.help = {
    name: 'typing-test',
    aliases: ['tt']
};