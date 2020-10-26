module.exports = (bot) => {
    const channelId = '707560452728684585' // welcome channel
    const rulesChannelId = '707561484170821703' //rules channel id
    const rolesChannelId = '707562309043748905' //roles channel id

    bot.on('guildMemberAdd', (member) =>{
        console.log(member)

        const message = `Please welcome <@${member.id}> to the server! Please visit ${member.guild.channels.cache.get(rulesChannelId).toString()} to get verified and visit ${member.guild.channels.cache.get(rolesChannelId).toString()} to grab some custom roles! Feel free to explore the server and enjoy!`
        

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}