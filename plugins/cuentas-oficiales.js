let handler = async m => m.reply(`
β πΎπππππΌπ ππππΎππΌπππ ππΌππΌπ½ππ β

*Hola, los nΓΊmeros Oficiales de GataBot son:*

π *GataBot ~ Wa.me/593993684821*

π *Sub GataBot ~ Wa.me/14509251286*

π _Para saber si GataBot estΓ‘ Activada escriba #estado_

π _Para ver el menΓΊ escriba #menu_

π _Puedes ser Bot diciendo #serbot o #jadibot_

π _Puedes hacer una solicitud para que los Bots Oficiales se unan diciendo #unete enlace del grupo_

π _Puedes Instalar a GataBot diciendo #instalarbot y #procesobot_
_________________________________________________

*GRUPO OFICIAL GATABOT*

*https://chat.whatsapp.com/Eg7m7mmb85IDLnSgFooDg6*
_________________________________________________

*GITHUB*

*https://github.com/GataNina-Li/GataBotV2*
_________________________________________________

*NΓΊmero de la Creadora (NO BOT)*

πΈ *Gata Dios ~ https://wa.me/message/XBTGQ4NYEWM7O1*

π _Solo escrΓ­beme para temas relacionados a GataBot_
_________________________________________________

β οΈ *Los Bots Oficiales son temporales en grupos, es preferible que sea Bot o instalar a GataBot* β οΈ
                            π πππ©π πΏππ€π¨ π                    
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentaoficial|cuentasofc|cuentasgatabot|Cuentasoficiales|cuentagatabot|cuentasgb|cuentagb|Cuentagb|Cuentasgb$/i

module.exports = handler
