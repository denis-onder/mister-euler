const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const rp = require("request-promise");
const $ = require("cheerio");

client.on("ready", () => console.log(`${client.user.tag} connected.`));

client.on("message", msg => {
  switch (msg.content) {
    case `${config.bot_symbol} random`:
      rp.get(
        `https://projecteuler.net/problem=${Math.floor(Math.random() * 668)}`
      )
        .then(html => {
          msg.reply("```\n" + $(".problem_content", html).text() + "\n```");
        })
        .then(() => msg.delete());
      break;
  }
});

client.login(`${config.token}`);
