let axios = require("axios");
let fetch = require('node-fetch')
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*Inserte el link/enlace que desee acortar/reducir*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `ā *Link acortado correctamente!!*\n\nš±āš¤ *Link anterior:*\n${text}\nš±āš¤ *Link nuevo:*\n*${json.result}*`.trim()
          
m.reply(hasil)
}
handler.help = ['tinyurl','short2'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(reducir|Reducir|acortar|Acortar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
