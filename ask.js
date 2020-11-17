const imgBox = document.querySelector('#image-url-input');
const textBox = document.querySelector('#text-box');
const postButton = document.querySelector('#post-button');

let userInputs = {};

postButton.addEventListener('click', function (event) {
	event.preventDefault();

	userInputs.url = imgBox.value;
	userInputs.question = textBox.value;

	localStorage.setItem('data', JSON.stringify(userInputs));
});
