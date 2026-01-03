const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token);

function getTodayName() {
  const date = new Date();
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo'
  });
}

(async () => {
  try {
    await bot.setChatTitle(chatId, getTodayName());
    console.log('Nome do grupo atualizado com sucesso');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
