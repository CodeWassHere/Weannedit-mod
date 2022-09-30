const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

  let yt = ["yazı","tura","dik"]
let sonuç = yt[Math.floor(Math.random() *yt.length)];

    const embed = new EmbedBuilder()
    .setDescription(`${sonuç} geldi`)
    .setColor("#0082ff")
    .setThumbnail("https://cdn.discordapp.com/attachments/1018457421041115186/1020652691887751178/unknown.png")
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["yt"]
};

exports.help = {
  name: "yazı-tura"
};