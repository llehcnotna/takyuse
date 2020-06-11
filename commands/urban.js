const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (client, message, args) => {

    // >urban <search|random>
    let image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxeXc6CDMTuda_avVhbE95cPJ2QMoKLxNbHR5pvyUoB0a_y-fl';
    if(args.length < 1) return message.channel.send(`>urban <search>`);
    let search = args.join(' ');

    if(args[0] === 'random'){
        urban.random().first(res => {

            let urbanRandomEmbed = new Discord.RichEmbed()
            .setColor('#C1882A')
            .setAuthor(`Urban Dictionary | ${res.word}`, image)

            .setDescription(`**Definition:** ${res.definition || 'No Definition'}
            **Example:** ${res.example || 'No Example'}
            **Upvote:** ${res.thumbs_up || 0}
            **Downvote:** ${res.thumbs_down || 0}
            **Link:** [${res.word}](${res.permalink || "https://wwww.urbandictionary.com/"})`)
            .setTimestamp()
            .setFooter(`Written by ${res.author || 'unknown'}`);

            message.channel.send(urbanRandomEmbed);
        });
    };
    if(args[0] === 'random') return;
        urban(search).first(res => {
            if(!res) return message.channel.send('No results found for this topic, sorry!');
            if(res === 'random') return

            let urbanEmbed = new Discord.RichEmbed()
                .setColor('#C1882A')
                .setAuthor(`Urban Dictionary | ${res.word}`, image)

                .setDescription(`**Definition:** ${res.definition || 'No Definition'}
                **Example:** ${res.example || 'No Example'}
                **Upvote:** ${res.thumbs_up || 0}
                **Downvote:** ${res.thumbs_down || 0}
                **Link:** [${res.word}](${res.permalink || "https://wwww.urbandictionary.com/"})`)
                .setTimestamp()
                .setFooter(`Written by ${res.author || 'unknown'}`);

                message.channel.send(urbanEmbed);
    
    });
};

module.exports.help = {
    name: 'urban',
    aliases: ['urb', 'urbandictionary', 'ud']
};