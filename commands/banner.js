const { EmbedBuilder } = require("discord.js")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); 
const token = "MTAyMDk5MzQ2MDI5MzA4MzE5OQ.Gkx99p.NBJ8bJrHR0H2Bpr1r71aH2SufL2CtkqU7KgCNw" // TEKRAR BOT TOKENİNİZİ YAZIN

exports.run = function(client, message, args) {

    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
    
    let response = fetch(`https://discord.com/api/v9/users/${user.id}`, {
    method: 'GET',
    headers: {
    Authorization: `Bot ${token}`
    }
    })
    let receive = ''
    let banner = "https://dummyimage.com/2000x500/33363c/ffffff&text=Banner+Yok"
    response.then(a => {
    if (a.status !== 404) {
    a.json().then(data => {
    receive = data['banner']
    
    if (receive !== null) {
    
    let response2 = fetch(`https://cdn.discordapp.com/banners/${user.id}/${receive}.gif`, {
    method: 'GET',
    headers: {
    Authorization: `Bot ${token}`
    }
    })
    let statut = ''
    response2.then(b => {
    statut = b.status
    banner = `https://cdn.discordapp.com/banners/${user.id}/${receive}.gif?size=1024`
    if (statut === 415) {
    banner = `https://cdn.discordapp.com/banners/${user.id}/${receive}.png?size=1024`
    }})}})}})
    
    setTimeout(() => {
    const embed = new EmbedBuilder()
    .setDescription(`**[RESİM](${banner})**`)
    .setImage(banner)
    .setColor("#0099ff")
    return message.reply({ embeds: [embed]}).catch(err => {})
    }, 1000)

};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'banner'
};