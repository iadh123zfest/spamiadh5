const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527410455916969994")
setInterval(function() {
channel.send(`**Credit By Greeat Server كريدت باي قريب سرفر**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
