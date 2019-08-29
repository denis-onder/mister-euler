if (process.env.NODE_ENV !== "container") require("dotenv").config();

module.exports = {
  bot_symbol: "-",
  token: process.env.TOKEN
};
