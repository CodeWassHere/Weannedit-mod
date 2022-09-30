const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");
   const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const modal = new ModalBuilder()
.setCustomId('form')
.setTitle('WeannEdit - Menülü Rol Alma Sistemi!')
  const a1 = new TextInputBuilder()
  .setCustomId('1')
  .setLabel('Başlık') //ELLEMEYİN
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Menüdeki 1Yazı Başlığı')
  .setRequired(true)
  const a2 = new TextInputBuilder()
  .setCustomId('2')
  .setLabel('Başlık') //ELLEMEYİN
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Menüdeki Yazı Başlığı')
  .setRequired(true)
  const a3 = new TextInputBuilder()
  .setCustomId('3')
  .setLabel('Rol ID') //ELLEMEYİN
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Menüdeki 1. Başlıkta Olucak Rol ID')
  .setRequired(true)
  const a4 = new TextInputBuilder()
  .setCustomId('4')
  .setLabel('Rol ID') //ELLEMEYİN
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Menüde 2. Başlıkta Verilicek Rolün ID')
  .setRequired(true)
   
  const row = new ActionRowBuilder().addComponents(a1);
   const row2 = new ActionRowBuilder().addComponents(a2);
 const row4 = new ActionRowBuilder().addComponents(a3);
 const row5 = new ActionRowBuilder().addComponents(a4);

  modal.addComponents(row, row2, row4, row5);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "kurulum"){
    await interaction.showModal(modal);
	}
})  

client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'form') {
    const menu1 = interaction.fields.getTextInputValue('1')
    const menu2 = interaction.fields.getTextInputValue('2')
    const menu3 = interaction.fields.getTextInputValue('3')
    const menu4 = interaction.fields.getTextInputValue('4')
  
    
const row = new ActionRowBuilder()
.addComponents( 
  new SelectMenuBuilder()
  .setCustomId('select')
.setPlaceholder('Aşağıdaki Menüden Rol Alabilirsin!')
.addOptions([
{
label: `${menu1}`,
value: 's1',
},
{
label: `${menu2}`,
value: "s2"
}
    ])
);
    const embed = new EmbedBuilder()
    .setTitle("WeannEdit - Rol Alma Sistemi!")
    .setDescription("Aşağıdaki menüden istediğin rolleri alabilirsin!")
    .setColor("#ff0000")
    interaction.channel.send({embeds: [embed], components: [row]})
    interaction.reply({content: "Menü Başarıyla Gönderildi.", ephemeral: true})

    db.set(`menu_${interaction.guild.id}`, menu3)
      db.set(`menu2_${interaction.guild.id}`, menu4)
     
     
    
}
})
   client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "select") {
                if (interaction.values[0] == "s1") {
             let rol = db.fetch(`menu_${interaction.guild.id}`)
                  if(!rol) return;
            if(!interaction.member.roles.cache.has(rol)) { 
              interaction.member.roles.add(rol)
            interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(rol)
            interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true})
             
              }
                   } 
            }
       })
             
              client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "select") {
                if (interaction.values[0] == "s2") {
             let rol = db.fetch(`menu2_${interaction.guild.id}`)
                  if(!rol) return;
            if(!interaction.member.roles.cache.has(rol)) { 
              interaction.member.roles.add(rol)
            interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(rol)
            interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true})
             
              }
                   } 
            }
       })
client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "select") {
                if (interaction.values[0] == "s3") {
             let rol = db.fetch(`menu3_${interaction.guild.id}`)
                  if(!rol) return;
            if(!interaction.member.roles.cache.has(rol)) { 
              interaction.member.roles.add(rol)
            interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(rol)
            interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true})
             
              }
                   } 
            }
       })







module.exports = client;

require("./events/message.js")
require("./events/ready.js")

        client.on('interactionCreate', async interaction => {
            let butonrol = db.fetch(`buton_rol${interaction.message.id}`)
          if(!butonrol) return;
          if (!interaction.isButton()) return;
          if(interaction.customId === "rol") {
              if(!interaction.member.roles.cache.has(butonrol)) { 
              interaction.member.roles.add(butonrol)
            interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(butonrol)
            interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true})
          }
            }
          })


          client.on('messageDelete', message => {

            db.set(`snipe.mesaj.${message.guild.id}`, message.content)
            db.set(`snipe.id.${message.guild.id}`, message.author.id)
          
          })



          client.on("messageCreate", async message => {

            let data = ["sa", "Sa", "sA", "SA", "sea", "Sea", "SEA"];
            if (data.includes(message.content)) {
              message.reply("As Kardeşim Hoş Geldin Sefa Getirdin!");
            }
          
          
          
          
            let data2 = [
              "gnydn",
              "günaydın",
              "Günaydın",
              "gunaydin",
              "gunaydın",
              "Gunaydın",
              "Gunaydin"
            ];
            if (data2.includes(message.content)) {
              message.reply("Sanada Günaydın Canım. 😯🌄🌅");
            }
          
          
          
          
            let data3 = [
              "iyi geceler",
              "iyi akşamlar",
              "iyi gclr",
              "ii geceler",
              "iyi aksamlar",
              "Iyi Geceler",
              "İyi geceler",
              "İyi akşamlar"
            ];
            if (data3.includes(message.content)) {
              message.reply("Saol Knka Sanada İyi Geceler. 🌙🌜");
            }
          
          })
    



          
   



              client.on("messageCreate", msg => {
               let i = db.fetch(`reklam_${msg.guild.id}`)
                  if (i == 'acik') {
                      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
                      if (reklam.some(word => msg.content.includes(word))) {
                        
                                msg.delete();
                                let log = db.fetch(`log_${msg.guild.id}`) 
                                client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Reklam Yapmaya Çalıştı`)
                                  return msg.channel.send('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => console.log);
                  
        
                        }
                      }
                  })

//-------------------- REKLAM ENGEL --------------------//   
//-------------------- REKLAM ENGEL --------------------//   




          
client.login(config.token)