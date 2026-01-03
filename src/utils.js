function getTodayGroupName(){
  const now = new Date();

  const date = now.toLocaleDateString('pt-BR',{
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  
  const weekday = now.toLocaleDateString('pt-BR', {
    weekday: 'long'
  });

  return `${date} | ${weekday}`
}

module.exports = { getTodayGroupName };