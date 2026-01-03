const cron = require('node-cron')
const bot = require('./bot')
const { getTodayGroupName } = require('./utils')

const GROUP_ID = -1003646364184;

cron.schedule('0 0 * * *', async () => {
  const newName = getTodayGroupName();
  try{
    await bot.setChatTitle(GROUP_ID, newName);
    console.log('Nome atualizado: ', newName);
  } catch(err) {
    console.error('Erro ao atualizar o nome: ', err.message);
  }
  console.log('[CRON] Atualizando nome do grupo:', newName);
},{
  timezone:'America/Sao_Paulo'
})