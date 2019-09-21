const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const joined = formatDate(member.joinedAt);
   module.exports.run = async (client, message,args) => {   
  let bot = client;
const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'Aucun';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Informations:'`**> Display name:** ${member.displayName}
            **> Rejoints le:** ${joined}
            **>Rôles:** ${roles}`, true)

            .addField('Informations d\'utilisateurs:',`**> ID:** ${member.user.id}
            **> Pseudo**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Créé le**: ${created}`, true)

            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Joue à',`**> Nom:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
module.exports.config = {
 name: "userinfos",
aliases: ["ui","userinfo"]
}

