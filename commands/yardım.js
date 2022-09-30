const Discord = require('discord.js'); 

exports.run = async (client, message, args) => {
const embed = new Discord.EmbedBuilder()
.setTitle(`WeannEdit | Yardım`)
.setDescription("[Buraya Tıklayarak](https://www.youtube.com/channel/UCSm5CfKWMHxQnwWkq6FxRtQ) Youtube kanalımıza göz atabilirsiniz")
.addFields([
{ name: `!avatar`, value:  `Kişinin avatarını gösterir.`},
{ name: `!ban`, value:  `Etiketlediği kişiyi banlar.`},
{ name: `!banner`, value:  `Etiketlediği kişinin banner'ını atar.`},
{ name: `!dmduyur`, value:  `Sunucudaki herkese Dm'den mesaj atar.`},
{ name: `!kurulum`, value:  `Seçmeli Emoji Kurulum.`},
{ name: `!emojiler`, value:  `Sunucudaki emojileri gösterir.`},
{ name: `!küfür-engel`, value:  `Sunucuda küfürü engeller.`},
{ name: `!reklam-engel`, value:  `Sunucuda Reklamı Engeller.`},
{ name: `!everhere-engel`, value:  `Sunucuda everyone atmayı engeller.`},
{ name: `!profil`, value:  `Profilinizi gösterir.`},
{ name: `!snake`, value:  `Yılan oyunu oynarısınız.`},
{ name: `!tavsiye`, value:  `Ayarladığınız kanala tavsiye yollar.`},
{ name: `!snipe`, value:  `Son silinen mesajı gösterir.`},
{ name: `!yazı-tura`, value:  `Yazı tura atar.`},
{ name: `!sil`, value:  `100 Mesaja Kadar Silme.`},
{ name: `!log-ayarla`, value:  `log ayarlama.`},
{ name: `!link-kısalt`, value:  `Link kısaltma.`},
{ name: `!fake-mesaj`, value:  `Fake mesaj yollama.`},
{ name: `!buton-rol`, value:  `Butonlu rol verme.`},
{ name: `!üyebilgi`, value:  `Sunucudaki üye sayısı.`},
{ name: `!a`, value:  `Etiketlediğiniz kişiye abone rolü verir.`},
{ name: `!abone-rol`, value:  `Abone rolü ayarlar.`},
{ name: `!Abone-yetkili`, value:  `Abone rolü verebilicek yetkiliyi ayarlar..`},


])

.setTimestamp()
message.channel.send({ embeds: [embed] }) 
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "yardım", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };