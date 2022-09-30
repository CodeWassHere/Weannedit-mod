const Discord  = require('discord.js');
exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

const embed = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTimestamp()
.setTitle(user.user.tag)
.setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
.setDescription(`
> **Discord'a katılma tarihi:** <t:${Math.floor(user.user.createdTimestamp / 1000)}:d>
> **Sunucuya katılma tarihi:** <t:${Math.floor(user.joinedTimestamp / 1000)}:d>
> **Sunucuda ki adı:** \`${user.displayName}\`
> **Durum:** \`${user.presence?.status ? user.presence?.status.replace("dnd", "Rahatsız Etmeyin").replace("idle", "Boşta").replace("online", "Aktif").replace("offline", "Aktif Değil") : "Aktif Değil"}\`
> **ID:** \`${user.id}\``)

return message.reply({ embeds : [embed] })
}

exports.conf = {
aliases: ['user']
}

exports.help = {
name: 'profil'
}