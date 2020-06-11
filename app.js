// Required Libraries //
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Command Handler Setup //
fs.readdir('./commands', (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if (jsfile.length <= 0){
        return console.log(' [ LOG ] couldn\'t find commands!');
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[ LOG ] ${f} loaded!`);
        client.commands.set(props.help.name, props);
        // Aliases
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name)
        });
    });
});

///////////////////////////

// Client Event: On Ready //
client.on('ready', async () => {
    console.log(`\n[ LOG ] ${client.user.username} Launched... \n        discord.js ${Discord.version}`);
    client.user.setStatus('online');
function setActivity() {
    var gameInfo = [`Javascript`, `${config.prefix}help`, `Almost Done`]

    var info = gameInfo[Math.floor(Math.random() * gameInfo.length)];
    client.user.setActivity(info);

    };
setInterval(setActivity, 1000 * 60 * 5);
});

////////////////////////////

// Server Join and Leave messages //
client.on('guildMemberAdd', member => {
    
    var role = member.guild.roles.find(r => r.name === 'Member');
    if(!role) console.log('[ LOG ] I couldn\'t find a role to match.');
    member.addRole(role);

    const welcomeMessage = [
        `**${member.user.username}** just joined the server!`,
        `**${member.user.username}** just joined. Everyone, look busy!`,
        `**${member.user.username}** just joined. Can I get a heal!`,
        `**${member.user.username}** just showed up. Hold my beer.`,
        `Big **${member.user.username}** showed up!`,
        `A wild **${member.user.username}** has spawned in the server`,
        `**${member.user.username}** just slid into the server.`,
        `**${member.user.username}** just arrived. Seems OP - please nerf.`,
        `Welcome **${member.user.username}**. Leave your weapons by the door.`,
        `Welcome **${member.user.username}**. Shoes off before you come in!`
        
]
    const message = welcomeMessage[Math.floor(Math.random() * welcomeMessage.length)];
    member.guild.channels.find(c => c.name === 'general-chat').send(message);
});

client.on('guildMemberRemove', member => {

    member.guild.channels.find(c => c.name === 'general-chat').send(`We're sorry to see you go **${member.user.username}**!`);

});

////////////////////////////////////

// Events //

// Raw //
// client.on('raw', event => {
//     console.log(event);
//     const eventName = event.t;
//     if(eventName === 'MESSAGE_REACTION_ADD')
//     {
//         if(event.d.message_id === '699363414245638174')
//         {
//             var reactionChannel = client.channels.get(event.d.channel_id);
//             if(reactionChannel.messages.has(event.d.message_id))
//                 return;
//             else {
//                 reactionChannel.fetchMessage(event.d.message_id)
//                 .then(message => {
//                     var messageReaction = message.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id);
//                     var user = client.users.get(event.d.user_id);
//                     client.emit('messageReactionAdd', messageReaction, user);
//                 })
//             }
//         }
//     }
//     else if(eventName === 'MESSAGE_REACTION_REMOVE')
//     {
//         if(event.d.message_id === '699363414245638174')
//         {
//             var reactionChannel = client.channels.get(event.d.channel_id);
//             if(reactionChannel.messages.has(event.d.message_id))
//                 return;
//             else {
//                 reactionChannel.fetchMessage(event.d.message_id)
//                 .then(message => {
//                     var messageReaction = message.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id);
//                     var user = client.users.get(event.d.user_id);
//                     client.emit('messageReactionRemove', messageReaction, user);
//                 })
//             }
//         }
//     }
// });
// /////////

// // MessageReact //
// client.on('messageReactionRemove', (messageReaction, user) => {
//     var roleName = messageReaction.emoji.name;
    
//     var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() ===
//     roleName.toLowerCase());

//     if(role)
//     {
//         var member = messageReaction.message.guild.members.find(member => member.id === user.id);
//         if(member)
//         {
//             member.removeRole(role.id);
//         }
//     }
// });

// //////////////////

// // MessageReact //
// client.on('messageReactionAdd', (messageReaction, user) => {
//     var roleName = messageReaction.emoji.name;
//     console.log(roleName)
//     var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() ===
//     roleName.toLowerCase());

//     if(role)
//     {
//         var member = messageReaction.message.guild.members.find(member => member.id === user.id);
//         if(member)
//         {
//             member.addRole(role.id);
//         }
//     }
// });

// //////////////////

// Join //
client.on('guildMemberAdd', member => {

    const userIcon = member.user.displayAvatarURL;

    let joinEmbed = new Discord.RichEmbed()
    .setColor('#77B255')
    .setDescription(`📥 **${member.user.tag}** has \`joined\` the server.`)
    .setFooter('User Join', `${userIcon}`).setTimestamp(userIcon.createdAt);

    member.guild.channels.find(c => c.name === 'action-log').send(joinEmbed);
});

//////////

// Leave //
client.on('guildMemberRemove', member => {
    
    const userIcon = member.user.displayAvatarURL;

    let leaveEmbed = new Discord.RichEmbed()
    .setColor('#DD2E44')
    .setDescription(`📤 **${member.user.tag}** has \`left\` the server.`)
    .setFooter('User Leave', `${userIcon}`).setTimestamp(userIcon.createdAt);

    member.guild.channels.find(c => c.name === 'action-log').send(leaveEmbed);
});

///////////

// Nickname Change //
client.on('guildMemberUpdate', (oMember, nMember) => {
    if(oMember.displayName === nMember.displayName) return;

    const userIcon = oMember.user.displayAvatarURL;

    let nickEmbed = new Discord.RichEmbed()
    .setColor("#AFB8BF")
    .setDescription(`🔖 **${oMember.user.tag}** has changed their \`nickname\` to: **${nMember.displayName}**.`)
    .setFooter('Name Change', `${userIcon}`).setTimestamp(userIcon.createdAt);

    oMember.guild.channels.find(c => c.name === 'action-log').send(nickEmbed);

});

/////////////////////

// Message Update and Delete //
client.on('messageUpdate', (oldMessage, newMessage) => {

    if(oldMessage.author.bot) return;

    if(oldMessage.content === newMessage.content) return;

    const userIcon = oldMessage.author.displayAvatarURL;

    let messageEditEmbed = new Discord.RichEmbed()
        .setColor('#DD2E44')
        .setDescription(`oldMessage: **"${oldMessage.content}"**\nnewMessage: **"${newMessage.content}"**\nUser: **${oldMessage.author.tag}**\n[Jump to Message](https://discordapp.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`)
        .setFooter('Message Update', `${userIcon}`).setTimestamp(userIcon.createdAt);

        let adminChannel = newMessage.guild.channels.find(c => c.name === 'admin-log')

        adminChannel.send(messageEditEmbed);
});
client.on('messageDelete', async message => {

    if(message.author.bot) return;
    if(message.content.startsWith(config.prefix)) return;

    const userIcon = message.author.displayAvatarURL;

    let messageDeleteEmbed = new Discord.RichEmbed()
        .setColor('#DD2E44')
        .setDescription(`MessageDeleted: **"${message.content}"**\nUser: **${message.author.tag}**`)
        .setFooter('Message Update', `${userIcon}`).setTimestamp(userIcon.createdAt);

        let adminChannel = message.guild.channels.find(c => c.name === 'admin-log')
    
        adminChannel.send(messageDeleteEmbed);
});

///////////////////////////////

// Console Chat //
let y = process.openStdin()
y.addListener('data', res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.get('688920321532755997').send(x.join(' '));
});

////////////

// Perms Stuff //
client.on('message', async message => {
    
    if(message.author.bot) return;

    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith('> ')) return
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);
});

/////////////////

//     // Auto Message //
//     var NOTIFY_CHANNEL;
//     client.on('ready', () => {
//         NOTIFY_CHANNEL = client.channels.find(c => c.name === 'spam-commands'); // Channel to send notification
    
    
//     let replies = ['**Client Restarting...**']

//     let result = Math.floor((Math.random() * replies.length));

//     const START_DATE = '2018-10-10'; // Date used as the starting point for multi-hour intervals, must be YYYY-MM-DD format
//     const START_HOUR = 7; // Hour of the day when the timer begins (0 is 12am, 23 is 11pm), used with START_DATE and INTERVAL_HOURS param
//     const INTERVAL_HOURS = 12; // Trigger at an interval of every X hours
//     const TARGET_MINUTE = 0; // Minute of the hour when the chest will refresh, 30 means 1:30, 2:30, etc.
//     const OFFSET = 0; // Notification will warn that the target is X minutes away
    
//     // Don't change any code below
//     const NOTIFY_MINUTE = (TARGET_MINUTE < OFFSET ? 60 : 0) + TARGET_MINUTE - OFFSET;
//     const START_TIME = new Date(new Date(START_DATE).getTime() + new Date().getTimezoneOffset() * 60000 + START_HOUR * 3600000).getTime();
    
//     setInterval(function() {
//         var d = new Date();
//         let result = Math.floor((Math.random() * replies.length));
//         if(Math.floor((d.getTime() - START_TIME) / 3600000) % INTERVAL_HOURS > 0) return; // Return if hour is not the correct interval
//         if(d.getMinutes() !== NOTIFY_MINUTE) return; // Return if current minute is not the notify minute
//         NOTIFY_CHANNEL.send(replies[result]).then(message => client.destroy()).then(() => client.login(config.token));
//     }, 60 * 1000); // Check every minute
// });

// Client Login //
client.login(process.env.BOT_TOKEN);

//////////////////
