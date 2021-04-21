const botconfg = require("./config.json");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("욕하면 죽일거야");
})

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === 'dm') return;

    let prefix = botconfg.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd === `${prefix}안녕`){
            message.channel.send('뭘봐');
    }
    let blacklisted = ["시발", "ㅅㅂ", "ㅄ", "ㅂㅅ", "ㅅㅣ발", "ㅣㅅ발"]
    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
    }

    if (foundInText) {
        const user = message.author.id;
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setDescription(`<@${user}> 욕하지마`);
        message.channel.send(embed)
}
})
bot.login(process.env.TOKEN);