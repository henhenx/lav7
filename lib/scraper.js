/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const chalk = require('chalk')
const fs = require("fs")
const gis = require("g-i-s")
const ytdl = require('ytdl-core');
const yts = require("yt-search");
const fetch = require("node-fetch");
const FormData = require("form-data");
const cookie = require("cookie");
const token = `e2dbd0c0-d21b-45d2-b60f-d49940f2d0e7`
const vm = require ('vm')


function pinterest(url) {
  return new Promise(async (resolve, reject) => {
    let form = new URLSearchParams();
    form.append("url", url);
    let html = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: form,
      })
    ).text();
    $ = cheerio.load(html);
    let data = [];
    $("table > tbody > tr").each(function (i, e) {
      if ($($(e).find("td")[0]).text() != "")
        data.push({
          url: $($(e).find("td")[0]).find("a").attr("href"),
        });
    });
    if (data.length == 0) return resolve({ status: false });
    resolve({ status: true, data });
  });
}

let is = {
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua":
      '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    cookie:
      "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
};


function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

module.exports = { pinterest, styletext, }
