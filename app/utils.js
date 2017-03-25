let output = (msg = 'Test') => {
	if (NODE_ENV === 'development')
		console.log(LANG === 'ru' ? `Сообщение: ${msg}` : `Message is: ${msg}`);

	alert(`${msg} message`);
};

export { output };
