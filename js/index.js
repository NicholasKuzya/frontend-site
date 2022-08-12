const TelegramApi = require('node-telegram-bot-api')

const token = '5417831977:AAH_R6-zOsJcFqha9KUSeJUF_8aR1C-98Ww';

const bot = new TelegramApi(token, { polling: true })

bot.setMyCommands([
	{ command: '/start', description: 'Жми скорее! 😉' }
])


const btnsFront = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{ text: 'Front End', callback_data: 'front' }]
		]
	})
}





bot.on('message', async msg => {
	const text = msg.text;
	const userName = msg.from.first_name;
	const chatId = msg.chat.id;
	console.log(msg)
	if (text === '/start') {
		const castomMessage = `Привет, ${userName}! Рады видеть тебя в нашем боте! Что тебя интересует?`
		return bot.sendMessage(chatId, castomMessage, btnsFront)
	}
	return bot.sendMessage(chatId, `${userName}, я тебя не понимаю. У тебя ведь есть варианты ответа...`)
})

bot.on('callback_query', msg => {
	const data = msg.data;
	const chatId = msg.message.chat.id;
	if (data === 'front') {
		const castomMessage = 'Отличный выбор! Переходи на наш канал, там мы рассказываем: Что это? Как его освоить? Ну и отвечаем на многие другие вопросы)) 🙃 https://t.me/academiyacoderov';
		bot.sendMessage(chatId, castomMessage)
	}
})