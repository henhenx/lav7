const fetch = require('node-fetch');
const fs = require('fs');

async function askGPT(text) {
  try { 
    const baseUrl = 'https://aemt.me/prompt/gpt';
    const query = `prompt=Kamu adalah Catozolala, asisten virtual yang diberi nama catoz kamu diciptakan oleh orang bernama Wave. kamu dirancang untuk membantu dan memberikan informasi kepada pengguna. mulai dari seni,budaya jepang,teknologi, dan lainya.&text=${text}`;
    const url = `${baseUrl}?${query}`;
    const chatgpt = await fetch(url).then(res => res.json());
    return chatgpt;
  } catch (e) {
    throw new Error('Internal server error!');
  } 
}
async function GptGo(text) {
  try {
  const baseUrl = 'https://aemt.me/gptgo';
  const query = `text=${text}`;
  const url = `${baseUrl}?${query}`;

  const gptgo = await fetch(url).then(res => res.json());
  return gptgo;
   } catch (e) {
  throw `Internal server error!`
  } 
}

module.exports = {
  askGPT,
  GptGo
}
