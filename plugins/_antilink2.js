let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

 if (chat.antiLink2 && isGroupLink) {
    await m.reply(`*「❗️ANTI LINKS❗️」*\n*Que haces bro?, ${await this.getName(m.sender)} Tantos idiomas y solo entiendes a vrgasos >:v*`)
    await m.reply(`*A mamarla a otro lado*`)
    if (isAdmin) return m.reply('*De la que te salvaste k-bron, sos admin :v*') 
    if (!isBotAdmin) return m.reply('*El Bot no es admin, no puede eliminar :,v*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*A que prro más troll, enviaste el zelda de este grupo xD*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler 
