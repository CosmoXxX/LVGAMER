module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const lang = require('../lang/fr.json').help
    const embed = new Discord.RichEmbed()

.setAuthor(message.author.username, message.author.avatarURL)
.setColor('0040ff')
.setTitle(lang.title)
.setThumbnail(client.user.avatarURL)
.addField(lang.jeux,`• \`fnstats\` →${lang.fn}\n• \`skin\` →${lang.skin}\n• \`brstats\` →${lang.br}`)
.addField("📰 **Informations** →", `• \`help\` →${lang.h}`)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    aliases: ["h"]
}