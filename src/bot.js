const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true
});

bot.on('message', (msg) =>{
  const chatID = msg.chat.id;
  bot.sendMessage(chatID, 'Working...')
})

module.exports = bot;