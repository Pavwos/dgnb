require('dotenv').config();

require('./bot');
require('./scheduler');

console.log('Bot rodando em silêncio');
console.log('Token carregado?', !!process.env.BOT_TOKEN);
