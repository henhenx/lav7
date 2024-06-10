


global.idbot = "0001"
global.capbot = "saya adalah bot rimuru yang di kembangkan oleh `catozolala.` saya siap melayani anda setiap saat."


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})