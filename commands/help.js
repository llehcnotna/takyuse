const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >help <command>

    if(args[0] === '8ball'){
        let eightBallHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}8ball\` __\`Asks the 8ball a question\`__\n**Aliases**: \`8b\`\n\n**Usage**: ${config.prefix}8ball <question>\n\n**Examples**:\n\`${config.prefix}8ball Is there a pot of gold at the end of the rainbow?\` asks the 8ball if there is a pot of gold at the end of the rainbow`);

        return message.channel.send(eightBallHelpEmbed);
    };
    if(args[0] === 'advice'){
        let adviceHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}advice\` __\`Gives random points of advice\`__\n\n**Usage**: ${config.prefix}advice\n\n**Examples**:\n\`${config.prefix}advice\` gives random advice`);

        return message.channel.send(adviceHelpEmbed);
    };
    if(args[0] === 'avatar'){
        let avatarHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}avatar\` __\`Gets the mentioned user's avatar\`__\n**Aliases**: \`pfp\`\n\n**Usage**: ${config.prefix}avatar <user>\n\n**Examples**:\n\`${config.prefix}avatar\` shows the user's profile picture\n\`${config.prefix}avatar @user\` shows the profile picture of mentioned user`);

        return message.channel.send(avatarHelpEmbed);
    };
    if(args[0] === 'botinfo'){
        let botinfoHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}botinfo\` __\`Shows information about ${client.user.username}\`__\n**Aliases**: \`bi\`\n**Usage**: ${config.prefix}botinfo\n\n**Examples**:\n\`${config.prefix}botinfo\` gends information about the client`);

        return message.channel.send(botinfoHelpEmbed);
    };
    if(args[0] === 'calculate'){
        let calculateHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}calculate\` __\`Solves math problems\`__\n**Aliases**: \`calc\`, \`math\`\n**Usage**: ${config.prefix}calculate <equation>\n\n**Examples**:\n\`${config.prefix}calculate 1+1\` outputs answer of 2\n\`${config.prefix}calculate 10cm to inches\` converts 10cm to inches\n\`${config.prefix}calculate 10km to miles\` converts 10km to miles`);

        return message.channel.send(calculateHelpEmbed);
    };
    if(args[0] === 'cat'){
        let catHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}cat\` __\`Sends a random picture of a cat\`__\n**Aliases**: \`catto\`, \`kitty\`\n\n**Usage**: ${config.prefix}cat\n\n**Examples**:\n\`${config.prefix}cat\` gives you a random cat`);

        return message.channel.send(catHelpEmbed);
    };
    if(args[0] === 'choose'){
        let chooseHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}choose\` __\`Choose between two or more choices\`__\n**Aliases**: \`pick\`\n\n**Usage**: ${config.prefix}choose <choice1> | <choice2> . . .\n\n**Examples**:\n\`${config.prefix}choose foo | bar\` pick between "foo" or "bar"`);

        return message.channel.send(chooseHelpEmbed);
    };
    if(args[0] === 'close'){
        let closeHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}close\` __\`Closes the channel that command is run in\`__\n\n**Usage**: ${config.prefix}close\n\n**Examples**:\n\`${config.prefix}close\` closes current channel`);

        return message.channel.send(closeHelpEmbed);
    };
    if(args[0] === 'colour'){
        let colourHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}colour\` __\`Sets the user's colour or if no argument, shows available colours\`__\n**Aliases**: \`color\`\n\n**Usage**: ${config.prefix}colour <colour>\n\n**Examples**:\n\`${config.prefix}colour\` shows available colours\n\`${config.prefix}colour purple\`sets the user's colour to purple`);

        return message.channel.send(colourHelpEmbed);
    };
    if(args[0] === 'compliment'){
        let complimentHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}compliment\` __\`Sends a random compliment\`__\n\n**Usage**: ${config.prefix}compliment <user>\n\n**Examples**:\n\`${config.prefix}compliment\` sends a random compliment directed at the author\n\`${config.prefix}compliment @user\` sends a random compliment directed towards the mentioned user`);

        return message.channel.send(complimentHelpEmbed);
    };
    if(args[0] === 'cookie'){
        let cookieHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}cookie\` __\`Sends a cookie\`__\n\n**Usage**: ${config.prefix}cookie <user>\n\n**Examples**:\n\`${config.prefix}cookie @user\` sends a cookie to the mentioned member`);

        return message.channel.send(cookieHelpEmbed);
    };
    if(args[0] === 'dog'){
        let dogHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}dog\` __\`Sends a random picture of a dog\`__\n**Aliases**: \`doggo\`, \`pupper\`, \`pooch\`\n\n**Usage**: ${config.prefix}dog\n\n**Examples**:\n\`${config.prefix}dog\` gives you a random dog`);

        return message.channel.send(dogHelpEmbed);
    };
    if(args[0] === 'fox'){
        let foxHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}fox\` __\`Sends a random picture of a fox\`__\n\n**Usage**: ${config.prefix}fox\n\n**Examples**:\n\`${config.prefix}fox\` gives you a random fox`);

        return message.channel.send(foxHelpEmbed);
    };
    if(args[0] === 'help'){
        let helpHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}help\` __\`Displays the default help message or if provided, command info\`__\n**Aliases**: \`commands\`\n\n**Usage**: ${config.prefix}help <command>\n\n**Examples**:\n\`${config.prefix}help\` displays a list of all the commands\n\`${config.prefix}help ping\` displays the help info for the ping command`);

        return message.channel.send(helpHelpEmbed);
    };
    if(args[0] === 'insult'){
        let insultHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}insult\` __\`Sends a random insult\`__\n\n**Usage**: ${config.prefix}insult <user>\n\n**Examples**:\n\`${config.prefix}insult\` sends a random insult directed at the author\n\`${config.prefix}insult @user\` sends a random insult directed towards the mentioned user`);

        return message.channel.send(insultHelpEmbed);
    };
    if(args[0] === 'mute'){
        let muteHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}mute\` __\`Mutes mentioned user\`__\n\n**Usage**: ${config.prefix}mute <user>\n\n**Examples**:\n\`${config.prefix}mute @user\` mutes mentioned user until unmute`);

        return message.channel.send(muteHelpEmbed);
    };
    if(args[0] === 'muted'){
        let mutedHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}muted\` __\`Shows currently muted users\`__\n\n**Usage**: ${config.prefix}muted\n\n**Examples**:\n\`${config.prefix}muted\` displays muted users`);

        return message.channel.send(mutedHelpEmbed);
    };
    if(args[0] === 'open'){
        let openHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}open\` __\`Opens the channel that command is run in\`__\n\n**Usage**: ${config.prefix}open\n\n**Examples**:\n\`${config.prefix}open\` opens current channel`);

        return message.channel.send(openHelpEmbed);
    };
    if(args[0] === 'ping'){
        let pingHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}ping\` __\`Gets the ping of the client\`__\n\n**Usage**: ${config.prefix}ping\n\n**Examples**:\n\`${config.prefix}ping\` pong!`);

        return message.channel.send(pingHelpEmbed);
    };
    if(args[0] === 'rate'){
        let rateHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}rate\` __\`choose something for the bot to rate out of 10\`__\n\n**Usage**: ${config.prefix}rate <argument>\n\n**Examples**:\n\`${config.prefix}rate Takyuse\` rates myself out of 10`);

        return message.channel.send(rateHelpEmbed);
    };
    if(args[0] === 'roast'){
        let roastHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}roast\` __\`Sends a random roast\`__\n\n**Usage**: ${config.prefix}roast <user>\n\n**Examples**:\n\`${config.prefix}roast\` sends a random roast directed at the author\n\`${config.prefix}roast @user\` sends a random insult directed towards the mentioned user`);

        return message.channel.send(roastHelpEmbed);
    };
    if(args[0] === 'ship'){
        let shipHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}ship\` __\`Ships two mentioned users\`__\n\n**Usage**: ${config.prefix}ship <user1> <user2>\n\n**Examples**:\n\`${config.prefix}ship @user1 @user2\` could work...`);

        return message.channel.send(shipHelpEmbed);
    };
    if(args[0] === 'space'){
        let spaceHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}space\` __\`Sends back your message but with spaces in between\`__\n\n**Usage**: ${config.prefix}space <message>\n\n**Examples**:\n\`${config.prefix}space what\` w h a t`);

        return message.channel.send(spaceHelpEmbed);
    };
    if(args[0] === 'typing-test'){
        let typingTestHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}typing-test\` __\`How fast can you type?\`__\n**Aliases**: \`tt\`\n\n**Usage**: ${config.prefix}typing-test <difficulty>\n\n**Examples**:\n\`${config.prefix}typing-test\` displays difficulty menu\n\`${config.prefix}typing-test impossible\` you have 5 seconds to type the text`);

        return message.channel.send(typingTestHelpEmbed);
    };
    if(args[0] === 'unmute'){
        let unmuteHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}unmute\` __\`Unmutes mentioned user\`__\n\n**Usage**: ${config.prefix}unmute <user>\n\n**Examples**:\n\`${config.prefix}unmute @user\` unmutes mentioned user if currently muted`);

        return message.channel.send(unmuteHelpEmbed);
    };
    if(args[0] === 'uptime'){
        let uptimeHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}uptime\` __\`Get the current uptime of the client\`__\n**Aliases**: \`ut\`\n\n**Usage**: ${config.prefix}uptime\n\n**Examples**:\n\`${config.prefix}uptime\` shows uptime`);

        return message.channel.send(uptimeHelpEmbed);
    };
    if(args[0] === 'urban'){
        let urbanHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}urban\` __\`Search and return Urban Dictionary definitions\`__\n**Aliases**: \`ud\`, \`urbandictionary\`, \`urb\`\n\n**Usage**: ${config.prefix}urban <search|random>\n\n**Examples**:\n\`${config.prefix}urban test\` search Urban Dictionary for the term 'test'\n\`${config.prefix}urban random\` returns a random search result from Urban Dictionary`);

        return message.channel.send(urbanHelpEmbed);
    };
    if(args[0] === 'userinfo'){
        let userinfoHelpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`\`${config.prefix}userinfo\` __\`Shows information about the mentioned user\`__\n**Aliases**: \`ui\`\n\n**Usage**: ${config.prefix}userinfo <user>\n\n**Examples**:\n\`${config.prefix}userinfo\` shows info about yourself\n\`${config.prefix}userinfo @user\` shows info about the mentioned user`);

        return message.channel.send(userinfoHelpEmbed);
    };
    
    if(!args[0]) {
        let helpEmbed = new Discord.RichEmbed()
        .setColor('#54DB88')
        .setDescription(`Use \`${config.prefix}help <command>\` to get more information on a specific command, for example: \`${config.prefix}help colour\``)
        .addField('Core [4]', `\`help\`, \`ping\`, \`colour\`, \`uptime\``)
        .addField('Fun [14]', `\`8ball\`, \`advice\`, \`cat\`, \`choose\`, \`compliment\`, \`cookie\`, \`dog\`, \`fox\`, \`insult\`, \`rate\`, \`roast\`, \`ship\`, \`space\`, \`typing-test\``)
        .addField('Utilities [6]', `\`avatar\`, \`botinfo\`,\`calculate\`, \`userinfo\`, \`muted\`, \`urban\``)
        .addField('Moderation [5]', `\`close\`, \`mute\`, \`open\`, \`setnick\`, \`unmute\``)

        .setFooter('Don\'t include the example brackets when using commands.')

        message.channel.send(helpEmbed);
    
    } else {
        let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
        if(!command) {
            return message.channel.send(`No command called "${args}" found.`);
        };
    };
};

module.exports.help = {
    name: 'help',
    aliases: ['commands']
};