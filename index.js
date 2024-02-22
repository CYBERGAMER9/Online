const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('STREAMING')
        .setURL('https://twitch.tv/sinister')
        .setState('Idle')
        .setName('Nothing')
        .setDetails('Day dreaming')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1205861441274384405/1210173840764702780/7b09e77ce992c383457e26f2384f91eb5999dfce.gif?ex=65e99937&is=65d72437&hm=a553ddb7b3463d9ecc84180b029ff3d3b150ce4a63e84367b5b6befa1d4ed334&')
        .setAssetsLargeText('Creating Perfection')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('Verified')
        
        .addButton('Discord Server', 'https://discord.com/invite/K99nfhCyHx');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












