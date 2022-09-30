const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
if(!message.member.permissions.has("	0x0000000000000008"))return message.channel.send("⚠️ | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!")

let üyesayi = message.guild.memberCount;
let botlar = message.guild.members.cache.filter(m => m.user.bot).size
let kullanıcılar = üyesayi - botlar
const embed = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTimestamp()
.addFields([
{ name: `Toplam Üye`, value: `**${üyesayi}**`, inline:true },
{ name: `Kullanıcılar`, value: `**${kullanıcılar}**`, inline:true },
{ name: `Botlar`, value: `**${botlar}**`, inline:true },
{ name: `Üye Durumları`, value: `**${message.guild.members.cache.filter(o => o.presence?.status === "online").size}** Çevrimiçi\n**${message.guild.members.cache.filter(i => i.presence?.status === "idle").size}** Boşta\n**${message.guild.members.cache.filter(dnd => dnd.presence?.status === "dnd").size}** Rahatsız Etmeyin`, inline:true },
])
return message.channel.send({embeds: [embed]})
}

exports.conf = {
aliases: ["üyedurum", "üyeler", "durumlar", "durum"]
}

exports.help = {
name: "üyebilgi"
}