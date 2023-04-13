const button = document.querySelector('.button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
	const newCard = document.createElement('div');
	newCard.classList.add('new-card');
	newCard.innerHTML = `
		<h2>Novo Título</h2>
		<p>Nova Descrição</p>
	`;

	container.appendChild(newCard);

	const randomX = Math.floor(Math.random() * (window.innerWidth - newCard.offsetWidth));
	const randomY = Math.floor(Math.random() * (window.innerHeight - newCard.offsetHeight));

	newCard.style.top = `${randomY}px`;
	newCard.style.left = `${randomX}px`;

	setTimeout(() => {
		newCard.remove();
	}, 3000);
});
