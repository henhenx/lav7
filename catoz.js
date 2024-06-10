/*
    Catozolala
     
*/

require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const chalk = require('chalk')
const { exec } = require("child_process")
const moment = require('moment-timezone')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')


module.exports = async (ptz, m, store) => {
try {

const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (ptz.user.id.split(':')[0]+'@s.whatsapp.net' || ptz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await ptz.decodeJid(ptz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const from = mek.key.remoteJid
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const pino = require('pino')
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const itsMe = m.sender == botNumber ? true : false
const isOwner = owner1.includes(senderNumber) || isBot
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
const isPc = from.endsWith('@s.whatsapp.net')
//==============================================  
const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
//==============================
//prem
const prem1 = JSON.parse(fs.readFileSync('./lib/premium.json'))
//sc
const sc = JSON.parse(fs.readFileSync('./lib/listsc.json'))
//panel
const crtpanel = JSON.parse(fs.readFileSync('./lib/listpanel.json'))
//ban
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
//tanggal
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
//==============================================  
const isPrem = prem1.includes(m.sender)
const isSc = sc.includes(m.sender)
const isPanel = crtpanel.includes(m.sender)
const isBan = banned.includes(m.sender)
//==============================================
//==============================================
//saldo
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit");

let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));

//rupiah
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
//==============================================
//mediafire
const { mediafire } = require('./scraper/mediafire')
//==============================================


switch(command) {

case 'tokoh':
if (isBan) return m.reply(mess.ban)
const data1 = {
title: "Tokoh🛒",
sections: [
{
title: "Topup $ Buy",
rows: [
{
title: "Beli Saldo💎",
description: "Klick untuk membeli saldo",
id: ".belisaldo",
},
{
title: "Beli Money 💸",
description: "Klick Untuk Membeli Money\n\n_Untuk mendapatkan money kamu bisa mendapatkan dengan cara bermain, dengan ketik .funmenu_",
id: ".thnks",
},
{
title: "Beli Limit 🎟",
description: "Klick Untuk Membeli Limit\n\n_Ketik .buylimit *jumlah* untuk membeli limit_",
id: ".thnks",
},
],
},

{
title: "Shop",
rows: [
{
title: "Beli Premium",
description: "Rp5k",
id: ".buyprem",
},
{
title: "Reseller Panel",
description: "10k Bisa create server sepuasnya",
id: ".buypanel",
},
],
},

{
title: "Script",
rows: [
{
title: "Beli Script Dengan Saldo",
description: "Menampilkan Layanan Script",
id: ".layanan1",
},
],
},

{
title: "Script",
rows: [
{
title: "Beli Script Dengan Money",
description: "Menampilkan Layanan Script",
id: ".layanan2",
},
],
},

],
};

ptz.sendListButton(m.chat, `Tokoh🛒\nSelamat datang di\ntokoh ${wm}\n\nhubungi owner jika eror\nwa.me/+${owner}`, data1,
"Klic Menu Di Bawah Sense", m)
break


case 'layanan1': 
if (isBan) return m.reply(mess.ban)
const layanan1 = {
title: "Pilih di sini",
sections: [
{
title: "Script",
rows: [
{
title: "Scrip Catozolala Polling",
description: "30k | Status ✅",
id: ".buysc",
},
],
},
],
};

ptz.sendListButton(m.chat, `Berikut list yang kami sediakan\nIsi saldo? Silahkan ketik .belisaldo Selamat Belanja🛒`, layanan1, "Selamat Memilih", m)
break

case 'layanan2': 
if (isBan) return m.reply(mess.ban)
const layanan2 = {
title: "Pilih di sini",
sections: [
{
title: "Script Beli Dengan Limit",
rows: [
{
title: "buyscbugv1",
description: "500 money💸",
id: ".buyscbugv1",
},
{
title: "buyscbugv2",
description: "500 money💸",
id: ".buyscbugv2",
},
{
title: "buyscbugv3",
description: "500 money💸",
id: ".buyscbugv3",
},
],
},
],
};

ptz.sendListButton(m.chat, `Berikut list yang kami sediakan\nMau mendapatkan money? silahkan ketik .funmenu untuk mendapatkan money💸`, layanan2, "Selamat Memilih", m)
break


case 'acc': case 'addsaldo':{
if (isBan) return m.reply(mess.ban)
if (!isCreator) throw m.reply(mess.owner)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
m.reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
case 'kirim': {
if (!isCreator) throw m.reply(mess.owner)
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

 ptz.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted: m
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;


case 'saldo':{
if (isBan) return m.reply(mess.ban)
m.reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(m.sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break

case 'belisaldo': {
if (isBan) return m.reply(mess.ban)
m.reply(`*━━ BUY SALDO ━━*

 _• *Dana:* 081938830020_
 
Note : Bukti pembelian silahkan kirim ke wa.me/+${owner}
`)
}
break

case 'buysc': {
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
       if (cekSaldo(sender,db_saldo) < 30000) return ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (args[0] == '30000'){
m.reply(`${mess.wait}\nSaldo anda terpotong Rp30.000`)
ptz.sendMessage(m.chat, {
document: fs.readFileSync('./message/catozolalanoenc1.zip'), 
mimetype: "application/zip",
fileName: `Catozolala No Enc ${versionsc}.zip`,
caption: `${pushname} Terimakasih telah membeli sc kami
╭─「 *❗ʀᴜʟᴇ𝘴* 」
> _❗Dilarang Jual_
> _❗Dilarang Upload_
> _❗Up Sc?, Harus Enc & Tag_
> _❗Dilarang Share_
└─────────────···☉
_🚫Note : Jika ketahuan kami tidak segan untuk menghapus nomer anda dari list sc kami,_

_💬Pesan Owner : Jika anda melihat atau menjual sc kecuali nomer 6281938830020 segera hubungi nomer tersebut dan mendapatkan reward dari kami_

_⛩️Gabung : https://whatsapp.com/channel/0029VaVKIxBKQuJK32uAi33W_
`,
}, { quoted: m })
minSaldo(sender, 30000, db_saldo)
ptz.sendMessage(owner0, { text: `@${m.sender.split('@')[0]} Sukses Bertransaksi\nMembeli ${command}\nWaktu : ${hours}`, mentions: [sender]}, { quoted: m })
} else m.reply('_ketik : buysc 30000_\n_Ketik untuk konfirmasi ✅_')
}
break


case 'buyprem': {
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
if (cekSaldo(sender,db_saldo) < 5000) return ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (args[0] == '5000'){
let ceknya = await ptz.onWhatsApp(`${m.sender}`)
prem1.push(`${m.sender}`)
fs.writeFileSync('./lib/premium.json', JSON.stringify(prem1))
m.reply(`Sukses membeli premium ${m.sender}\nketik .listprem untuk melihat`)
minSaldo(sender, 5000, db_saldo)
ptz.sendMessage(owner0, { text: `@${m.sender.split('@')[0]} Sukses Bertransaksi\nMembeli ${command}\nWaktu : ${hours}`, mentions: [sender]}, { quoted: m })
} else m.reply('_ketik : buyprem 5000_\n_Ketik untuk konfirmasi ✅_')
}
break

case 'buyscbugv1': {
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
if (global.db.data.users[m.sender].money < 500) return ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya money kamu kurang dari 500 Silahkan bermain game untuk mendapatkan money sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (args[0] == '500'){
m.reply(`_Sukses✅_\n_Tunggu Sebentar Sense_`) 
const baby2 = await mediafire('https://www.mediafire.com/file/xfw5xe4mprrlrq9/Sc_Bug_V1.zip/file')
ptz.sendMessage(m.chat, {
document: {url: baby2.link}, 
mimetype: "application/zip",
fileName: `${baby2.filename}`,
caption: `Sukses Membeli`,
}, { quoted: m }).catch((err) => msgreply('_⛩️Maaf terjadi Kesalahan!_'))
db.data.users[m.sender].money -= 500 // -1 limit
ptz.sendMessage(owner0, { text: `@${m.sender.split('@')[0]} Sukses Bertransaksi\nMembeli ${command}\nWaktu : ${hours}`, mentions: [sender]}, { quoted: m })
} else m.reply('_ketik : buyscbugv1 500_\n_Ketik untuk konfirmasi ✅_')
}
break

case 'buyscbugv2': {
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
if (global.db.data.users[m.sender].money < 500) return ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya money kamu kurang dari 500 Silahkan bermain game untuk mendapatkan money sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (args[0] == '500'){
m.reply(`_Sukses✅_\n_Tunggu Sebentar Sense_`) 
const baby2 = await mediafire('https://www.mediafire.com/file/xuzamc8oayprn4k/Sc_Bug_V2.zip/file')
ptz.sendMessage(m.chat, {
document: {url: baby2.link}, 
mimetype: "application/zip",
fileName: `${baby2.filename}`,
caption: `Sukses Membeli`,
}, { quoted: m }).catch((err) => msgreply('_⛩️Maaf terjadi Kesalahan!_'))
db.data.users[m.sender].money -= 500 // -1 limit
ptz.sendMessage(owner0, { text: `@${m.sender.split('@')[0]} Sukses Bertransaksi\nMembeli ${command}\nWaktu : ${hours}`, mentions: [sender]}, { quoted: m })
} else m.reply('_ketik : buyscbugv2 500_\n_Ketik untuk konfirmasi ✅_')
}
break

case 'buyscbugv3': {
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
if (global.db.data.users[m.sender].money < 500) return ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya money kamu kurang dari 500 Silahkan bermain game untuk mendapatkan money sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (args[0] == '500'){
m.reply(`_Sukses✅_\n_Tunggu Sebentar Sense_`) 
const baby2 = await mediafire('https://www.mediafire.com/file/l76f8btgfpqln9z/Sc_Bug_V3.zip/file')
ptz.sendMessage(m.chat, {
document: {url: baby2.link}, 
mimetype: "application/zip",
fileName: `${baby2.filename}`,
caption: `Sukses Membeli`,
}, { quoted: m }).catch((err) => msgreply('_⛩️Maaf terjadi Kesalahan!_'))
db.data.users[m.sender].money -= 500 // -1 limit
ptz.sendMessage(owner0, { text: `@${m.sender.split('@')[0]} Sukses Bertransaksi\nMembeli ${command}\nWaktu : ${hours}`, mentions: [sender]}, { quoted: m })
} else m.reply('_ketik : buyscbugv3 500_\n_Ketik untuk konfirmasi ✅_')
}
break
//🅟🅐🅝🅔🅛 🅜🅔🅝🅨
/*case "panelmenu": {
const owned = `${owner}@s.whatsapp.net`
const textbi = `*Hi @${m.sender.split("@")[0]} 👋*

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}ramlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}crateadmin
⭔${prefix}addpanel
⭔${prefix}listpanel
⭔${prefix}delpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
ptz.sendMessage(m.chat, { text: textbi, contextInfo: { mentionedJid: [m.sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
*/
//============================================== 

//🅐🅓🅓 🅟🅐🅝🅔🅛
//🅛🅘🅢🅣🅟🅐🅝🅔🅛
//🅓🅔🅛🅟🅐🅝🅔🅛

//==============================================  
case 'listpanel': case 'panellist':
if (!isCreator) throw '*Mau ngapain khusus owner??*'
teks = '*Reseller List*\n\n'
for (let XeonBotInc1 of crtpanel) {
teks += `- ${XeonBotInc1}\n`
}
teks += `\n*Total : ${crtpanel.length}*`
ptz.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": crtpanel } })
break
case 'addpanel': case 'buypanel':
if (isBan) return m.reply(mess.ban)
if (m.isGroup) return m.reply(mess.private)
if (!isCreator && cekSaldo(sender,db_saldo) < 10000) throw ptz.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 62xxx\nKetik untuk konfirmasi ✅`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ptz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukan nomer dengan benar`)
crtpanel.push(prrkek)
fs.writeFileSync('./lib/listpanel.json', JSON.stringify(crtpanel))
m.reply(`Sukses add *${prrkek}*\n\n_silahkan ketik 1gb user,62xx_\nketik .ramlist untuk melihat ram!\n\n> Saat membuat server tidak di punggut biaya`)
minSaldo(sender, 10000, db_saldo)
break
case 'delpanel':
if (!isCreator) throw m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6283897387848`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = crtpanel.indexOf(ya)
crtpanel.splice(unp, 1)
fs.writeFileSync('./lib/listpanel.json', JSON.stringify(crtpanel))
m.reply(`Nomer ini  ${ya} Telah di hapus sebagai reseller panel!`)
break
//==============================================  

//🅛🅘🅢🅣 🅤🅢🅡
//🅛🅘🅢🅣 🅢🅡🅥
//

//==============================================  

case "panel": {
if (isBan) return m.reply(mess.ban)
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${m.sender.split("@")[0]} 👋*

BII 
BY BII HOSTING

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb catoz,62xxx

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
ptz.sendMessage(m.chat, { text: text12, contextInfo: { mentionedJid: [m.sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break

case "ramlist":
if (isBan) return m.reply(mess.ban)
lrm = `RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
8GB ✅
10GB✅
UNLI (KHUSUS ADMIN SERVER)`
ptz.sendMessage(m.chat, {text : lrm}, {quoted : m})
break 
//==============================================  



//==============================================  
case "addusr": {
if (isBan) return m.reply(mess.ban)
if (!isCreator) throw m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await ptz.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* : ${hours}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
ptz.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "addsrv": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) throw m.reply('*Mau ngapain??*')
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
        
case "listusr": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) throw m.reply('*Mau ngapain??*')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeypanel
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        
case "listsrv": {
if (isBan) return m.reply(mess.ban)
if (!isCreator && !isPanel) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeypanel
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
//==============================================  

//🅓🅔🅛🅤🅢🅡

//==============================================  
case "delusr": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) throw m.rrply('*Mau ngapain??*')
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "delsrv": {
if (!isPanel) throw m.reply('*Mau ngapain??*')

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
//==============================================  


//🅐🅓🅓 🅢🅔🅔🅥🅔🅡


//==============================================  
case "1gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/510fba3e619c04c12f577.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`Hai Ini Data Akun Panel Mu

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs Hardz
`)

}

break

case "2gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/510fba3e619c04c12f577.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "3gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/e1e57c1cefcc24f248f85.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
case "4gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/e1e57c1cefcc24f248f85.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "4gb": {
const isBan = banned.includes(m.sender)
if (!isPanel) return m.reply('*Mau ngapain??*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4114"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

║⎙─➤ *👤USERNAME* : ${user.username}
║⎙─➤ *🔐PASSWORD* : ${password}
║⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb":  {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel xD - 8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "175"
let disk = "8024"
let email = username + "@hardxd.com"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`Account Has Been Created\n⚡Type: Panel 8GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
case "10gb": {
if (isBan) return m.reply(mess.ban)
if (!isPanel) return m.reply('*Mau ngapain??*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel xD - 10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10024"
let cpu = "200"
let disk = "10024"
let email = username + "@hardxd.com"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`Account Has Been Created\n⚡Type: Panel 8GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
case "unli": {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@hard.hosting"
akunlo = "https://telegra.ph/file/705261b19f37eb55c52af.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ptz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeypanel,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
//==============================================  

default:

}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})