const popup = document.getElementById('popup');
const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');

openButton.onclick = () => popup.classList.remove('hidden');
closeButton.onclick = () => popup.classList.add('hidden');