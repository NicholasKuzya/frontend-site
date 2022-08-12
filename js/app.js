const TOKEN = "5417831977:AAH_R6-zOsJcFqha9KUSeJUF_8aR1C-98Ww";
const CHAT_ID = "-1001664948660";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	let message = `<b>Заявка с сайта</b>\n`;
	message += `<b>Отправитель:</b> ${this.name.value}\n`;
	message += `<b>Почта:</b> ${this.email.value}\n`;
	message += `<b>Номер:</b> ${this.tel.value}\n`;
	message += `<b>Telega:</b> ${this.telega.value}\n`;

	const options = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8",
		},
		body: JSON.stringify({
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message
		}),

	};
	fetch(URI_API, options)
		.then(res => {
			this.name.value = '';
			this.email.value = '';
			this.tel.value = '';
			this.telega.value = '';
			document.getElementById('exampleCheck1').checked = false;
			alert('Заявка отправлена, спасибо!')
		})
		.catch(err => {
			console.warn(err)
		})
		.finally(() => {
			console.log('The end')
		})
})