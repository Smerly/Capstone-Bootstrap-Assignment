const textBoxOut = document.querySelector('#display-ask-text');
const teachImgDisplay = document.querySelector('#display-ask-image');

window.addEventListener('load', () => {
	const storedData = JSON.parse(localStorage.getItem('data'));
	textBoxOut.innerText = storedData.question;
	teachImgDisplay.src = storedData.url;
});
